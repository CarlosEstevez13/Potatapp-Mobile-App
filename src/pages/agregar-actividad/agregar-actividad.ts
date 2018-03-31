import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { FincaProvider } from "../../providers/finca/finca";

@IonicPage()
@Component({
  selector: "page-agregar-actividad",
  templateUrl: "agregar-actividad.html"
})
export class AgregarActividadPage {
  public nombre_activi;
  public descripcion_activi;
  public estado_activi;
  public fecha_activi;
  public num_jornales;
  public error:boolean;
  public estado:any;

  public descripcion: {
    nombre_activi: string;
    descripcion_activi: string;
    id_finca: any;
    estado_activi: any;
    fecha_activi: any;
    num_jornales: any;
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _fincaService: FincaProvider
  ) {
    this.error = false;
  }

  guardar() {
    if(this.estado === true){
      this.estado_activi = '1';
    }else{
      this.estado_activi = '0';
    }
    this.descripcion = {
      nombre_activi: this.nombre_activi,
      descripcion_activi: this.descripcion_activi,
      id_finca: this._fincaService.getIdFinca(),
      estado_activi: this.estado_activi,
      fecha_activi: this.fecha_activi,
      num_jornales: this.num_jornales
    };
    this._fincaService.postActividad(this.descripcion).subscribe(
      res => {
        if (!res) {
          this.error = true;
        }else{
          this.navCtrl.pop();
        }
      },
      e => {
        if(e){
          this.error = true;
        }
      }
    );
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AgregarActividadPage");
  }
}
