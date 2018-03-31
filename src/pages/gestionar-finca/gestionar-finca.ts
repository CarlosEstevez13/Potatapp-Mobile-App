import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FincaProvider } from '../../providers/finca/finca';
import { GestionarActividadPage } from '../gestionar-actividad/gestionar-actividad';
import { DescripcionFincaPage } from '../descripcion-finca/descripcion-finca';

/**
 * Generated class for the GestionarFincaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gestionar-finca',
  templateUrl: 'gestionar-finca.html',
})
export class GestionarFincaPage {

  public fincas;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _fincasService: FincaProvider) {
    this.getFincas();
  }

  getFincas(){
    this._fincasService.getFincas().subscribe(res => {
      this.fincas = res.result;
      }, e => {
        console.log(e);
      });
  }

  irDescripcion(id){
    this._fincasService.setIdFinca(id);
    this.navCtrl.push(DescripcionFincaPage);
  }


  irActividades(id){
    this._fincasService.setIdFinca(id);
    this.navCtrl.push(GestionarActividadPage);
  }

  ionViewDidEnter(){
    this.getFincas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GestionarFincaPage');
  }

}
