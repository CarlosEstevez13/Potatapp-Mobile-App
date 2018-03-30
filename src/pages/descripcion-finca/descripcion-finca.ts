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
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _fincaService: FincaProvider) {
                this.getDescripcion();
  }

  getDescripcion(){
    this._fincaService.getFincaDesc().subscribe(res => {
      this.descripcion = res.result;
      console.log(this.descripcion);
      }, e => {
        console.log(e);
      });
      return this.descripcion;
  }

  editar(){
    this.navCtrl.push(EditarFincaPage);
    /* this.navCtrl.setRoot(EditarActividadPage); */
  }

  ionViewDidEnter(){
    this.getDescripcion();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescripcionFincaPage');
  }

}
