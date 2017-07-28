import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class ContactService {

  items: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase, private angularFireAuth: AngularFireAuth) {
    angularFireAuth.authState.subscribe(user => {
      var path = '/contacts/' + user.uid;
      this.items = db.list(path, {
        query: {
          orderByChild: 'name'
          //, equalTo: 'A' para fazer query com valor igual a "A"
        }
      });
    });
  }

  public getAll() {
    return this.items;
  }

  public save(name: string, key: string) {
    if (key) {
      return this.items.update(key, { name: name });
    } else {
      return this.items.push({ name: name });
    }
  }

  public remove(key: string) {
    return this.items.remove(key);
  }
}
