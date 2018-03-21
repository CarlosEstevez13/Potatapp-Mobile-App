import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaDeseosProvider } from '../../providers/lista-deseos/lista-deseos';
import { DetallePage } from '../detalle/detalle';

@IonicPage()
@Component({
  selector: 'page-terminados',
  templateUrl: 'terminados.html',
})
export class TerminadosPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public _listaDeseos: ListaDeseosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TerminadosPage');
  }

  verDetalle(lista,idx){
    this.navCtrl.push(DetallePage, {
      lista:lista,
      idx:idx
    });
  }

}
