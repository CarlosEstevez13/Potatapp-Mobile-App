import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";
/* import { Observable } from "rxjs/Observable"; */

@Injectable()
export class FincaProvider {
  public url: string;
  public headers: Headers;
  public idFinca:string;
  public idActividad:string;
  public idEmpleado:any;

  constructor(private _http: Http) {
    this.url = "http://localhost:3546/api/";
  }

  setIdFinca(id){
   this.idFinca = id;
  }

  getIdFinca(){
   return this.idFinca;
  }

  setIdEmpleado(id){
    this.idEmpleado = id;
   }
 
   getIdEmpleado(){
    return this.idEmpleado;
   }

  setIdActividad(id){
    this.idActividad = id;
   }

   getIdActividad(){
    return this.idActividad;
   }

  getFincas() {
    return this._http.get(this.url + `fincas`).map(res => res.json());
  }

  getEmpleadosActivos() {
    return this._http.get(this.url + `empleadosactivos`).map(res => res.json());
  }

  getEmpleadosInactivos() {
    return this._http.get(this.url + `empleados`).map(res => res.json());
  }

  getEmpleadoDesc() {
    return this._http.get(this.url + `empleado/${this.getIdEmpleado()}`).map(res => res.json());
  }

  getEmpleadoDesc1(empleado) {
    return this._http.get(this.url + `empleado/${empleado}`).map(res => res.json());
  }

  getActividades() {
    return this._http.get(this.url + `actividades/${this.getIdFinca()}`).map(res => res.json());
  }

  getActividadesInactivas() {
    return this._http.get(this.url + `actividadesinactivas/${this.getIdFinca()}`).map(res => res.json());
  }

  getActividadDesc() {
    console.log(this.getIdActividad());
    return this._http.get(this.url + `actividad/${this.getIdActividad()}`).map(res => res.json());
  }

  getFincaDesc() {
    return this._http.get(this.url + `finca/${this.getIdFinca()}`).map(res => res.json());
  }

  putActividad(actividad) {
    const json = JSON.stringify(actividad);
    const params = json;
    const headers = new Headers({'Content-Type': 'application/json'});
    return this._http.put(this.url + `actividad/${actividad.id_activi}`, params, {headers: headers}).map(res => res.json());
  }

  postActividad(actividad) {
    const json = JSON.stringify(actividad);
    const params = json;
    const headers = new Headers({'Content-Type': 'application/json'});
    return this._http.post(this.url + `actividad`, params, {headers: headers}).map(res => res.json());
  }

  putFinca(finca) {
    const json = JSON.stringify(finca);
    const params = json;
    const headers = new Headers({'Content-Type': 'application/json'});
    return this._http.put(this.url + `finca/${finca.id_finca}`, params, {headers: headers}).map(res => res.json());
  }

  postEmpleado(empleado) {
    const json = JSON.stringify(empleado);
    const params = json;
    const headers = new Headers({'Content-Type': 'application/json'});
    return this._http.post(this.url + `empleado`, params, {headers: headers}).map(res => res.json());
  }

  putEmpleado(empleado) {
    const json = JSON.stringify(empleado);
    const params = json;
    const headers = new Headers({'Content-Type': 'application/json'});
    return this._http.put(this.url + `empleado/${empleado.id_empleado}`, params, {headers: headers}).map(res => res.json());
  }
}
