import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DescripcionEmpleadoPage } from './descripcion-empleado';

@NgModule({
  declarations: [
    DescripcionEmpleadoPage,
  ],
  imports: [
    IonicPageModule.forChild(DescripcionEmpleadoPage),
  ],
})
export class DescripcionEmpleadoPageModule {}
