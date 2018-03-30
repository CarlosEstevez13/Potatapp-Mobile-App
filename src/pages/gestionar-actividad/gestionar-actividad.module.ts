import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestionarActividadPage } from './gestionar-actividad';

@NgModule({
  declarations: [
    GestionarActividadPage,
  ],
  imports: [
    IonicPageModule.forChild(GestionarActividadPage),
  ],
})
export class GestionarActividadPageModule {}
