import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { ListaDeseosProvider } from '../../providers/lista-deseos/lista-deseos';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { AgregarPage } from '../agregar/agregar';
import { DetallePage } from '../detalle/detalle';


@IonicPage()
@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.html',
})
export class PendientesPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public _listaDeseos: ListaDeseosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendientesPage');
  }

  irAgregar(){
    this.navCtrl.push(AgregarPage);
  }

  verDetalle(lista,idx){
    this.navCtrl.push(DetallePage, {
      lista:lista,
      idx:idx
    });
  }
}
