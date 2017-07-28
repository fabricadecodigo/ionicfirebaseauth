import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditContatosPage } from './edit-contatos';

@NgModule({
  declarations: [
    EditContatosPage,
  ],
  imports: [
    IonicPageModule.forChild(EditContatosPage),
  ],
  exports: [
    EditContatosPage
  ]
})
export class EditContatosPageModule {}
