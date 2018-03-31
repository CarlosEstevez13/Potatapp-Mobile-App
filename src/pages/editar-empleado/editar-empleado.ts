import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FincaProvider } from '../../providers/finca/finca';

@IonicPage()
@Component({
  selector: 'page-editar-empleado',
  templateUrl: 'editar-empleado.html',
})
export class EditarEmpleadoPage {

  public descripcion;
  public error:boolean;
  public estado:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _fincaService: FincaProvider
  ) {
    this.getDescripcion();
    this.error = false;
  }


  getDescripcion() {
    this._fincaService.getEmpleadoDesc().subscribe(
      res => {
        this.descripcion = res.result;
        if(this.descripcion[0].estado_emple ==0){
          this.estado = false;
        }else{
          this.estado = true;
        }
      },
      e => {
        console.log(e);
      }
    );
  }

  guardar() {

    if(this.estado === true){
      this.descripcion[0].estado_emple = '1';
    }else{
      this.descripcion[0].estado_emple = '0';
    }
    this._fincaService.putEmpleado(this.descripcion[0]).subscribe(
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
    console.log('ionViewDidLoad EditarEmpleadoPage');
  }

}
