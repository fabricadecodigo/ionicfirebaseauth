import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactService } from '../../providers/contact-service/contact-service';
import { ImagePicker } from '@ionic-native/image-picker';

@IonicPage()
@Component({
  selector: 'page-edit-contatos',
  templateUrl: 'edit-contatos.html',
})
export class EditContatosPage {

  contactName: string;
  contactKey: string;
  imgPath: string;
  fileToUpload: any;

  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private contactService: ContactService,
    private imagePicker: ImagePicker) {

    this.contactKey = null;
    this.contactName = '';

    if (this.navParams.data.contact) {
      this.contactName = this.navParams.data.contact.name;
      this.contactKey = this.navParams.data.contact.$key;
    }
  }

  save() {
    this.contactService.uploadAndSave({
      name: this.contactName,
      key: this.contactKey,
      fileToUpload: this.fileToUpload
    });
    this.navCtrl.pop();
  }

  escolherFoto() {
    this.imagePicker.hasReadPermission()
      .then(hasPermission => {
        if (hasPermission) {
          this.pegarImagem();
        } else {
          this.solicitarPermissao();
        }
      }).catch(error => {
        console.error('Erro ao verificar permissão', error);
      });
  }

  solicitarPermissao() {
    this.imagePicker.requestReadPermission()
      .then(hasPermission => {
        if (hasPermission) {
          this.pegarImagem();
        } else {
          console.error('Permissão negada');
        }
      }).catch(error => {
        console.error('Erro ao solicitar permissão', error);
      });
  }

  pegarImagem() {
    this.imagePicker.getPictures({
      maximumImagesCount: 1, //Apenas uma imagem
      outputType: 1 //BASE 64
    })
      .then(results => {
        if (results.length > 0) {
          this.imgPath = 'data:image/png;base64,' + results[0];
          this.fileToUpload = results[0];
        } else {
          this.imgPath = '';
          this.fileToUpload = null;
        }
      })
      .catch(error => {
        console.error('Erro ao recuperar a imagem', error);
      });
  }

}
