import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SigninWithEmailPage } from './signinwithemail';

@NgModule({
  declarations: [
    SigninWithEmailPage,
  ],
  imports: [
    IonicPageModule.forChild(SigninWithEmailPage),
  ],
  exports: [
    SigninWithEmailPage
  ]
})
export class LoginPageModule {}
