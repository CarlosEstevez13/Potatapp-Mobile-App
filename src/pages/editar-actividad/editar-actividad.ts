import { Component, OnChanges } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { FincaProvider } from "../../providers/finca/finca";

@IonicPage()
@Component({
  selector: "page-editar-actividad",
  templateUrl: "editar-actividad.html"
})
export class EditarActividadPage implements OnChanges{
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
  ngOnChanges(changes){
    console.log(changes);
  }

  getDescripcion() {
    this._fincaService.getActividadDesc().subscribe(
      res => {
        this.descripcion = res.result;
        console.log(this.descripcion);
        if(this.descripcion[0].estado_activi ==0){
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
      console.log('if 1');
      this.descripcion[0].estado_activi = '1';
      console.log(this.descripcion[0].estado_activi);
    }else{
      console.log('if 0');
      this.descripcion[0].estado_activi = '0';
      console.log(this.descripcion[0].estado_activi);
    }
    console.log(this.descripcion[0]);
    this._fincaService.putActividad(this.descripcion[0]).subscribe(
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
    console.log("ionViewDidLoad EditarActividadPage");
  }
}
