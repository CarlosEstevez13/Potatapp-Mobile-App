import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FincaProvider } from '../../providers/finca/finca';
import { DescripcionActividadPage } from '../descripcion-actividad/descripcion-actividad';
import { AgregarActividadPage } from '../agregar-actividad/agregar-actividad';


@IonicPage()
@Component({
  selector: 'page-gestionar-actividad',
  templateUrl: 'gestionar-actividad.html',
})
export class GestionarActividadPage {
  public actividades;
  public finca;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _fincaService: FincaProvider) {
                this.getActividades();
                this.finca = this._fincaService.getIdFinca();
  }

  getActividades(){
    this._fincaService.getActividades().subscribe(res => {
      this.actividades = res.result;
      console.log(this.actividades);
      }, e => {
        console.log(e);
      });
  }

  irDescripcion(id){
    this._fincaService.setIdActividad(id);
    this.navCtrl.push(DescripcionActividadPage);
  }

  agregar(){
    this.navCtrl.push(AgregarActividadPage);
  }

  ionViewDidEnter(){
    this.getActividades();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GestionarActividadPage');
  }

}
