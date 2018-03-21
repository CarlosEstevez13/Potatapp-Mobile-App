import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PendientesPage } from '../pages/pendientes/pendientes';
import { TerminadosPage } from '../pages/terminados/terminados';
import { AgregarPage } from '../pages/agregar/agregar';
import { ListaDeseosProvider } from '../providers/lista-deseos/lista-deseos';
import { PlaceholderPipe } from '../pipes/placeholder/placeholder';
import { DetallePage } from '../pages/detalle/detalle';
import { PendientesPipe } from '../pipes/pendientes/pendientes';
import { ResaltadoDirective } from '../directives/resaltado.directive';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendientesPage,
    TerminadosPage,
    AgregarPage,
    PlaceholderPipe,
    DetallePage,
    PendientesPipe,
    ResaltadoDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendientesPage,
    TerminadosPage,
    AgregarPage,
    DetallePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListaDeseosProvider
  ]
})
export class AppModule {}
