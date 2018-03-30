import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarActividadPage } from './agregar-actividad';

@NgModule({
  declarations: [
    AgregarActividadPage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarActividadPage),
  ],
})
export class AgregarActividadPageModule {}
