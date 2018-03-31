import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { FincaProvider } from "../../providers/finca/finca";

@IonicPage()
@Component({
  selector: "page-agregar-empleado",
  templateUrl: "agregar-empleado.html"
})
export class AgregarEmpleadoPage {
  public nombre_emple;
  public apellidos_emple;
  public cedula_emple;
  public nacimiento_emple;
  public estado_emple;
  public eps_emple;
  public valor_emple;
  public valor_jornal;

  public estado: boolean;
  public error;

  public descripcion: {
    nombre_emple: string;
    apellidos_emple: string;
    cedula_emple: string;
    nacimiento_emple: string;
    estado_emple: any;
    eps_emple: string;
    valor_jornal: any;
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _fincaService: FincaProvider
  ) {
    this.error = false;
  }

  guardar() {
    if (this.estado === true) {
      this.estado_emple = "1";
    } else {
      this.estado_emple = "0";
    }
    this.descripcion = {
      nombre_emple: this.nombre_emple,
      apellidos_emple: this.apellidos_emple,
      cedula_emple: this.cedula_emple,
      nacimiento_emple: this.nacimiento_emple,
      estado_emple: this.estado_emple,
      eps_emple: this.eps_emple,
      valor_jornal: this.valor_jornal
    };
    this._fincaService.postEmpleado(this.descripcion).subscribe(
      res => {
        if (!res) {
          this.error = true;
        } else {
          this.navCtrl.pop();
        }
      },
      e => {
        if (e) {
          this.error = true;
        }
      }
    );
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad AgregarEmpleadoPage");
  }
}
