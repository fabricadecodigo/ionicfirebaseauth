import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class ContactService {

  items: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase, private angularFireAuth: AngularFireAuth, private fb: FirebaseApp) {
    let path = '/contacts/' + this.angularFireAuth.auth.currentUser.uid;
    this.items = db.list(path, {
      query: {
        orderByChild: 'name'
        //, equalTo: 'A' para fazer query com valor igual a "A"
      }
    });
  }

  public getAll() {
    return this.items;
  }

  private save(item: any) {
    if (item.$key) {
      return this.items.update(item.$key, { name: item.name });
    } else {
      return this.items.push({ name: item.name, url: item.url, fullPath: item.fullPath });
    }
  }

  public uploadAndSave(item: any) {
    let contact = { $key: item.key, name: item.name, url: '', fullPath: '' };

    if (contact.$key) {
      this.save(contact);
    } else {
      let storageRef = this.fb.storage().ref();
      let basePath = '/contacts/' + this.angularFireAuth.auth.currentUser.uid;
      contact.fullPath = basePath + '/' + contact.name + '.png';
      let uploadTask = storageRef.child(contact.fullPath).putString(item.fileToUpload, 'base64');

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress + "% done");
      },
      (error) => {
        console.error(error);
      },
      () => {
        contact.url = uploadTask.snapshot.downloadURL;
        this.save(contact);
      });
    }
  }

  public remove(item: any) {
    return this.items.remove(item.$key)
      .then(() => {
        this.removeFile(item.fullPath)
      });
  }

  public removeFile(fullPath: string) {
    let storageRef = this.fb.storage().ref();
    storageRef.child(fullPath).delete();
  }
}
