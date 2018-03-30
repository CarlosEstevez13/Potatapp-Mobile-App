import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestionarFincaPage } from './gestionar-finca';

@NgModule({
  declarations: [
    GestionarFincaPage,
  ],
  imports: [
    IonicPageModule.forChild(GestionarFincaPage),
  ],
})
export class GestionarFincaPageModule {

}
