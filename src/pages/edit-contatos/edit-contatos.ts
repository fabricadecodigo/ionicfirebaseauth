import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactService } from '../../providers/contact-service/contact-service';

@IonicPage()
@Component({
  selector: 'page-edit-contatos',
  templateUrl: 'edit-contatos.html',
})
export class EditContatosPage {

  contactName: string;
  contactKey: string;

  constructor(private navCtrl: NavController, private navParams: NavParams, private contactService: ContactService) {
    this.contactKey = null;
    this.contactName = '';

    if (this.navParams.data.contact) {
      this.contactName = this.navParams.data.contact.name;
      this.contactKey = this.navParams.data.contact.$key;
    }
  }

  save() {
    this.contactService.save(this.contactName, this.contactKey);
    this.navCtrl.pop();
  }

}
