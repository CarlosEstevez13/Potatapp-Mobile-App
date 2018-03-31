import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditarEmpleadoPage } from '../editar-empleado/editar-empleado';
import { FincaProvider } from '../../providers/finca/finca';


@IonicPage()
@Component({
  selector: 'page-descripcion-empleado',
  templateUrl: 'descripcion-empleado.html',
})
export class DescripcionEmpleadoPage {

  public descripcion:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _fincaService: FincaProvider) {
                this.getDescripcion();
  }

  getDescripcion(){
    this._fincaService.getEmpleadoDesc().subscribe(res => {
      this.descripcion = res.result;
      }, e => {
        console.log(e);
      });
      return this.descripcion;
  }

  editar(){
    this.navCtrl.push(EditarEmpleadoPage);
    /* this.navCtrl.setRoot(EditarActividadPage); */
  }

  ionViewDidEnter(){
    this.getDescripcion();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescripcionEmpleadoPage');
  }

}
