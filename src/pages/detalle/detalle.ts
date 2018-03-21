import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Lista } from '../../clases/listas';
import { ListaItem } from '../../clases/lista-item';
import { ListaDeseosProvider } from '../../providers/lista-deseos/lista-deseos';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {

  idx:number;
  lista:Lista;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public _listaDeseos: ListaDeseosProvider,
              public alertCtrl: AlertController) {
    
    this.idx = this.navParams.get("idx");
    this.lista = this.navParams.get("lista");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

  actualizar(item:ListaItem){
    item.completado = !item.completado;
    let todosMarcados = true;
    for(let item of this.lista.items){
      if(!item.completado){
        todosMarcados = false;
        break;
      }
    }
    this.lista.terminada = todosMarcados;
    
    this._listaDeseos.actualizarData();
  }

  borrarItem(){
    let confirm = this.alertCtrl.create({
      title: '¿Esta seguro que desea eliminar la lista?',
      message: 'Desea borrar este item?',
      buttons: [ 'Cancelar',
        {
          text: 'Eliminar',
          handler: () => {
            //console.log('Eliminar');
            this._listaDeseos.borrarLista(this.idx);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }

}
