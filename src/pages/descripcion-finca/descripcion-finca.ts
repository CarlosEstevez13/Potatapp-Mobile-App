import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FincaProvider } from '../../providers/finca/finca';
import { EditarFincaPage } from '../editar-finca/editar-finca';

@IonicPage()
@Component({
  selector: 'page-descripcion-finca',
  templateUrl: 'descripcion-finca.html',
})
export class DescripcionFincaPage {

  public descripcion:any;
  public descripcion1:any;
  public empleado:any;
  public idEmpleado:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _fincaService: FincaProvider) {
                this.getDescripcion();
                /* this.getEmpleado(); */
  }


  getDescripcion(){
    this._fincaService.getFincaDesc().subscribe(res => {
      this.descripcion = res.result;
      this.idEmpleado = res.result[0].trabajador_encargado;
      this.getEmpleado(this.idEmpleado);
      }, e => {
        console.log(e);
      });
    
      return this.descripcion,this.idEmpleado, this.empleado;
  }

  getEmpleado(idEmpleado){
    this._fincaService.getEmpleadoDesc1(idEmpleado).subscribe(res => {
      this.empleado = res.result[0].nombre_emple;
      }, e => {
        console.log(e);
      });
      return this.empleado;
  }

  editar(){
    this.navCtrl.push(EditarFincaPage);
    /* this.navCtrl.setRoot(EditarActividadPage); */
  }

  ionViewDidEnter(){
    this.getDescripcion();
    /* this.getEmpleado(); */

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescripcionFincaPage');
  }

}
