import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SigninPage } from './signin';

@NgModule({
  declarations: [
    SigninPage,
  ],
  imports: [
    IonicPageModule.forChild(SigninPage),
  ],
  exports: [
    SigninPage
  ]
})
export class LoginPageModule {}
