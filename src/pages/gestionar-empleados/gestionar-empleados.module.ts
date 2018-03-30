import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestionarEmpleadosPage } from './gestionar-empleados';

@NgModule({
  declarations: [
    GestionarEmpleadosPage,
  ],
  imports: [
    IonicPageModule.forChild(GestionarEmpleadosPage),
  ],
})
export class GestionarEmpleadosPageModule {}
