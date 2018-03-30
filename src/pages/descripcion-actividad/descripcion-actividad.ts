import { Component, OnChanges } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FincaProvider } from '../../providers/finca/finca';
import { EditarActividadPage } from '../editar-actividad/editar-actividad';

/**
 * Generated class for the DescripcionActividadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-descripcion-actividad',
  templateUrl: 'descripcion-actividad.html',
})
export class DescripcionActividadPage implements OnChanges{

  public descripcion:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _fincaService: FincaProvider) {
                this.getDescripcion();
  }
  ngOnChanges(){
    console.log('algo cambio');
  }

  getDescripcion(){
    this._fincaService.getActividadDesc().subscribe(res => {
      this.descripcion = res.result;
      console.log(this.descripcion);
      }, e => {
        console.log(e);
      });
      return this.descripcion;
  }

  editar(){
    this.navCtrl.push(EditarActividadPage);
    /* this.navCtrl.setRoot(EditarActividadPage); */
  }

  ionViewDidEnter(){
    this.getDescripcion();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescripcionActividadPage');
  }

}