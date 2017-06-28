import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth-service';
import { SigninPage } from '../signin/signin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private authService: AuthService) { }

  signOut() {
    this.authService.signOut()
      .then(() => {
        this.navCtrl.setRoot(SigninPage);
      })
      .catch((error) => {
        console.error(error);
      });
  }

}
