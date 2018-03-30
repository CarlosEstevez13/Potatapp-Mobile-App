import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarFincaPage } from './agregar-finca';

@NgModule({
  declarations: [
    AgregarFincaPage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarFincaPage),
  ],
})
export class AgregarFincaPageModule {}
