import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GestionarEmpleadosPage } from '../pages/gestionar-empleados/gestionar-empleados';
import { GestionarFincaPage } from '../pages/gestionar-finca/gestionar-finca';
import { GestionarActividadPage } from '../pages/gestionar-actividad/gestionar-actividad';
import { HistorialPage } from '../pages/historial/historial';
import { DescripcionFincaPage } from '../pages/descripcion-finca/descripcion-finca';
import { DescripcionEmpleadoPage } from '../pages/descripcion-empleado/descripcion-empleado';
import { DescripcionActividadPage } from '../pages/descripcion-actividad/descripcion-actividad';
import { EditarActividadPage } from '../pages/editar-actividad/editar-actividad';
import { AgregarActividadPage } from '../pages/agregar-actividad/agregar-actividad';
import { AgregarFincaPage } from '../pages/agregar-finca/agregar-finca';
import { AgregarEmpleadoPage } from '../pages/agregar-empleado/agregar-empleado';
import { EditarFincaPage } from '../pages/editar-finca/editar-finca';
import { EditarEmpleadoPage } from '../pages/editar-empleado/editar-empleado';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FincaProvider } from '../providers/finca/finca';

import {HttpModule, JsonpModule} from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GestionarEmpleadosPage,
    GestionarFincaPage,
    GestionarActividadPage,
    HistorialPage,
    DescripcionFincaPage,
    DescripcionActividadPage,
    DescripcionEmpleadoPage,
    EditarActividadPage,
    AgregarActividadPage,
    AgregarFincaPage,
    AgregarEmpleadoPage,
    EditarFincaPage,
    EditarEmpleadoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    JsonpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GestionarEmpleadosPage,
    GestionarFincaPage,
    GestionarActividadPage,
    HistorialPage,
    DescripcionFincaPage,
    DescripcionActividadPage,
    DescripcionEmpleadoPage,
    EditarActividadPage,
    AgregarActividadPage,
    AgregarFincaPage,
    AgregarEmpleadoPage,
    EditarEmpleadoPage,
    EditarFincaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FincaProvider
  ]
})
export class AppModule {}
