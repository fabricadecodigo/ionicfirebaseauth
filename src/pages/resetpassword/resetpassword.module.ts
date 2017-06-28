import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResetpasswordPage } from './resetpassword';

@NgModule({
  declarations: [
    ResetpasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(ResetpasswordPage),
  ],
  exports: [
    ResetpasswordPage
  ]
})
export class ResetpasswordPageModule {}
