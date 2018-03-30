import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarEmpleadoPage } from './editar-empleado';

@NgModule({
  declarations: [
    EditarEmpleadoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarEmpleadoPage),
  ],
})
export class EditarEmpleadoPageModule {}
