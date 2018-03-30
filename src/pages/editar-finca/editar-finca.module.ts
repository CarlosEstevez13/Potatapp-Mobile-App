import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarFincaPage } from './editar-finca';

@NgModule({
  declarations: [
    EditarFincaPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarFincaPage),
  ],
})
export class EditarFincaPageModule {}
