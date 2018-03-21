import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaItem } from '../../clases/lista-item';
import { Lista } from '../../clases/listas';
import { ListaDeseosProvider } from '../../providers/lista-deseos/lista-deseos';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {

  nombreLista:string = '';
  nombreItem:string = '';

  items:ListaItem[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public _listaDeseos: ListaDeseosProvider,
              public alertCtrl: AlertController) {
  }


  agregarItem(){
    if(this.nombreItem.length==0){
      return;
    }
    let item = new ListaItem();
    item.nombre = this.nombreItem;

    this.items.push(item);
    this.nombreItem = "";

  }

  eliminarItem(index:any){
    this.items.splice(index,1);
  }

  agregarLista(){
    if(this.nombreLista.length == 0){
      let alert = this.alertCtrl.create({
        title: 'Nombre de la lista',
        subTitle: 'El nombre de la lista es necesario!',
        buttons: ['OK']
      });
      alert.present();
      return;

    }else{
      let lista:Lista = new Lista(this.nombreLista);
      lista.items = this.items;
      this._listaDeseos.agregarLista(lista);
      this.navCtrl.pop();
    }
  }


}
