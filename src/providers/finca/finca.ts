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
  constructor(private _http: Http) {
    this.url = "http://localhost:3546/api/";
  }

  setIdFinca(id){
   this.idFinca = id;
  }

  getIdFinca(){
   return this.idFinca;
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

  getActividades() {
    return this._http.get(this.url + `actividades/${this.getIdFinca()}`).map(res => res.json());
  }

  getActividadDesc() {
    console.log('entro a Fincas service');
    console.log(this.getIdActividad());
    return this._http.get(this.url + `actividad/${this.getIdActividad()}`).map(res => res.json());
  }

  getFincaDesc() {
    console.log('entro a Fincas service');
    console.log(this.getIdFinca());
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
}
