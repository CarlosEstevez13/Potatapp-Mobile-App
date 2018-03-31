import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { DescripcionEmpleadoPage } from "../descripcion-empleado/descripcion-empleado";
import { FincaProvider } from "../../providers/finca/finca";
import { AgregarEmpleadoPage } from "../agregar-empleado/agregar-empleado";

@IonicPage()
@Component({
  selector: "page-gestionar-empleados",
  templateUrl: "gestionar-empleados.html"
})
export class GestionarEmpleadosPage {
  public empleados;
  public empleados1;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _fincasService: FincaProvider
  ) {
    this.getEmpleados();
  }

  getEmpleados() {
    this._fincasService.getEmpleadosActivos().subscribe(
      res => {
        this.empleados = res.result;
      },
      e => {
        console.log(e);
      }
    );
    this._fincasService.getEmpleadosInactivos().subscribe(
      res => {
        this.empleados1 = res.result;
      },
      e => {
        console.log(e);
      }
    );
  }

  agregar(){
    this.navCtrl.push(AgregarEmpleadoPage);
  }

  irDescripcion(id) {
    this._fincasService.setIdEmpleado(id);
    this.navCtrl.push(DescripcionEmpleadoPage);
  }

  ionViewDidEnter() {
    this.getEmpleados();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad GestionarEmpleadosPage");
  }
}
