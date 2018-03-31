import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FincaProvider } from '../../providers/finca/finca';

/**
 * Generated class for the EditarFincaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-finca',
  templateUrl: 'editar-finca.html',
})
export class EditarFincaPage {

  public descripcion;
  public error:boolean;
  public empleados;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _fincaService: FincaProvider) {
                this.getDescripcion();
                this.getEmpleados();
  }

  getDescripcion() {
    this._fincaService.getFincaDesc().subscribe(
      res => {
        this.descripcion = res.result;
      },
      e => {
        console.log(e);
      }
    );
  }

  getEmpleados() {
    this._fincaService.getEmpleadosActivos().subscribe(
      res => {
        this.empleados = res.result;
      },
      e => {
        console.log(e);
      }
    );
  }

  guardar() {
    this._fincaService.setIdEmpleado(this.empleados[0].id_empleado);
    this._fincaService.putFinca(this.descripcion[0]).subscribe(
      res => {
        if (!res) {
          this.error = true;
        } else {
          this.navCtrl.pop();
        }
      },
      e => {
        if(e){
          this.error = true;
        }
        console.log(e);
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarFincaPage');
  }

}
