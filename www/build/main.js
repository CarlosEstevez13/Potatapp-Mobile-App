webpackJsonp([4],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clases_lista_item__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clases_listas__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_lista_deseos_lista_deseos__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AgregarPage = (function () {
    function AgregarPage(navCtrl, navParams, _listaDeseos, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._listaDeseos = _listaDeseos;
        this.alertCtrl = alertCtrl;
        this.nombreLista = '';
        this.nombreItem = '';
        this.items = [];
    }
    AgregarPage.prototype.agregarItem = function () {
        if (this.nombreItem.length == 0) {
            return;
        }
        var item = new __WEBPACK_IMPORTED_MODULE_2__clases_lista_item__["a" /* ListaItem */]();
        item.nombre = this.nombreItem;
        this.items.push(item);
        this.nombreItem = "";
    };
    AgregarPage.prototype.eliminarItem = function (index) {
        this.items.splice(index, 1);
    };
    AgregarPage.prototype.agregarLista = function () {
        if (this.nombreLista.length == 0) {
            var alert_1 = this.alertCtrl.create({
                title: 'Nombre de la lista',
                subTitle: 'El nombre de la lista es necesario!',
                buttons: ['OK']
            });
            alert_1.present();
            return;
        }
        else {
            var lista = new __WEBPACK_IMPORTED_MODULE_3__clases_listas__["a" /* Lista */](this.nombreLista);
            lista.items = this.items;
            this._listaDeseos.agregarLista(lista);
            this.navCtrl.pop();
        }
    };
    AgregarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agregar',template:/*ion-inline-start:"/home/carlosestevez/curso-angular4/Aplicaciones/5.Deseos/src/pages/agregar/agregar.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{nombreLista | placeholder:\'Nueva Lista\'}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      <ion-item>\n        <ion-label floating>Nombre de la lista:</ion-label>\n        <ion-input type="text" [(ngModel)]="nombreLista"></ion-input>\n      </ion-item>        \n    </ion-card-header>\n    <ion-card-content>\n\n        <ion-item>\n            <ion-label floating>Item:</ion-label>\n            <ion-input (keyup.enter)=\'agregar()\' type="text" [(ngModel)]="nombreItem"></ion-input>\n          </ion-item> \n          <button ion-button class="button-block" (click)="agregarItem()">Agregar</button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="items.length != 0">\n    <!-- Items -->\n    <ion-card-header>\n      <h3>Items Agregados</h3>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-list>\n        <ion-item *ngFor="let item of items; let i = index">\n          <button ion-button color="dark" clear>\n            {{item.nombre}}\n          </button>\n          <button (click)="eliminarItem(i)" ion-button outline item-right color="danger">\n            <ion-icon  ios="ios-trash" md="md-trash"></ion-icon>\n            Borrar item\n            </button>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <button ion-button icon-left class="button-block" (click)="agregarLista()">\n    <ion-icon ios="ios-add-circle" md="md-add-circle"></ion-icon>\n    Agregar Lista\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"/home/carlosestevez/curso-angular4/Aplicaciones/5.Deseos/src/pages/agregar/agregar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_lista_deseos_lista_deseos__["a" /* ListaDeseosProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AgregarPage);
    return AgregarPage;
}());

//# sourceMappingURL=agregar.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendientesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_lista_deseos_lista_deseos__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_controller__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_params__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agregar_agregar__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detalle_detalle__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PendientesPage = (function () {
    function PendientesPage(navCtrl, navParams, _listaDeseos) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._listaDeseos = _listaDeseos;
    }
    PendientesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PendientesPage');
    };
    PendientesPage.prototype.irAgregar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__agregar_agregar__["a" /* AgregarPage */]);
    };
    PendientesPage.prototype.verDetalle = function (lista, idx) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__detalle_detalle__["a" /* DetallePage */], {
            lista: lista,
            idx: idx
        });
    };
    PendientesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pendientes',template:/*ion-inline-start:"/home/carlosestevez/curso-angular4/Aplicaciones/5.Deseos/src/pages/pendientes/pendientes.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Lista de pendientes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-grid *ngIf="(_listaDeseos.listas | pendientes:false).length == 0">\n    <ion-row>\n      <ion-col class="text-center caja-vacia">\n          <ion-icon class="icono-grande" ios="ios-sunny" md="md-sunny"></ion-icon>\n          <p>\n            No hay ninguna lista\n          </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-card *ngFor="let lista of _listaDeseos.listas | pendientes:false; let i=index">\n    <ion-item color="dark" (click)="verDetalle(lista, i)">\n      <h2 style="color: white">\n        {{lista.nombre}}\n      </h2>\n     <ion-note item-right>\n       {{lista.items.length}} items\n     </ion-note>\n    </ion-item>\n\n    <ion-list>\n      <ion-item *ngFor="let item of lista.items | slice: 0:2" (click)="verDetalle(lista, i)">\n        <ion-icon *ngIf="!item.completado" ios="ios-square-outline" md="md-square-outline"></ion-icon>\n        <ion-icon *ngIf="item.completado" ios="ios-checkbox-outline" md="md-checkbox-outline"></ion-icon>\n           {{item.nombre}}\n      </ion-item>\n      <ion-item class="text-center" *ngIf="lista.items.length > 2">\n        <ion-icon color="primary" ios="ios-arrow-dropdown" md="md-arrow-dropdown"></ion-icon>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="irAgregar()">\n      <ion-icon ios="ios-add" md="md-add"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <!-- <p [appResaltado]="\'red\'" >\n    Hola mundo\n  </p> -->\n\n</ion-content>\n\n'/*ion-inline-end:"/home/carlosestevez/curso-angular4/Aplicaciones/5.Deseos/src/pages/pendientes/pendientes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_controller__["a" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_params__["a" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_lista_deseos_lista_deseos__["a" /* ListaDeseosProvider */]])
    ], PendientesPage);
    return PendientesPage;
}());

//# sourceMappingURL=pendientes.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_lista_deseos_lista_deseos__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detalle_detalle__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TerminadosPage = (function () {
    function TerminadosPage(navCtrl, navParams, _listaDeseos) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._listaDeseos = _listaDeseos;
    }
    TerminadosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TerminadosPage');
    };
    TerminadosPage.prototype.verDetalle = function (lista, idx) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detalle_detalle__["a" /* DetallePage */], {
            lista: lista,
            idx: idx
        });
    };
    TerminadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terminados',template:/*ion-inline-start:"/home/carlosestevez/curso-angular4/Aplicaciones/5.Deseos/src/pages/terminados/terminados.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Listas Terminadas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n    <ion-grid *ngIf="(_listaDeseos.listas | pendientes:true).length == 0">\n        <ion-row>\n          <ion-col class="text-center caja-vacia">\n              <ion-icon class="icono-grande" ios="ios-sunny" md="md-sunny"></ion-icon>\n              <p>\n                No hay ninguna lista\n              </p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n  <ion-card *ngFor="let lista of _listaDeseos.listas | pendientes:true; let i=index">\n    <ion-item color="dark" (click)="verDetalle(lista, i)">\n      <h2 style="color: white">\n        {{lista.nombre}}\n      </h2>\n     <ion-note item-right>\n       {{lista.items.length}} items\n     </ion-note>\n    </ion-item>\n    \n    <ion-list>\n      <ion-item *ngFor="let item of lista.items | slice: 0:2" (click)="verDetalle(lista, i)">\n        <ion-icon *ngIf="!item.completado" ios="ios-square-outline" md="md-square-outline"></ion-icon>\n        <ion-icon *ngIf="item.completado" ios="ios-checkbox-outline" md="md-checkbox-outline"></ion-icon>\n           {{item.nombre}}\n      </ion-item>\n      <ion-item class="text-center" *ngIf="lista.items.length > 2">\n        <ion-icon color="primary" ios="ios-arrow-dropdown" md="md-arrow-dropdown"></ion-icon>\n      </ion-item>\n    </ion-list>\n  </ion-card>  \n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/carlosestevez/curso-angular4/Aplicaciones/5.Deseos/src/pages/terminados/terminados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_lista_deseos_lista_deseos__["a" /* ListaDeseosProvider */]])
    ], TerminadosPage);
    return TerminadosPage;
}());

//# sourceMappingURL=terminados.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/agregar/agregar.module": [
		281,
		3
	],
	"../pages/detalle/detalle.module": [
		282,
		2
	],
	"../pages/pendientes/pendientes.module": [
		283,
		1
	],
	"../pages/terminados/terminados.module": [
		284,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pendientes_pendientes__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terminados_terminados__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__pendientes_pendientes__["a" /* PendientesPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__terminados_terminados__["a" /* TerminadosPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/carlosestevez/curso-angular4/Aplicaciones/5.Deseos/src/pages/tabs/tabs.html"*/'<ion-tabs color="primary">\n  <ion-tab [root]="tab1Root" tabTitle="Pendientes" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Terminado" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/carlosestevez/curso-angular4/Aplicaciones/5.Deseos/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pendientes_pendientes__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_terminados_terminados__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_agregar_agregar__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_lista_deseos_lista_deseos__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_placeholder_placeholder__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_detalle_detalle__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_pendientes_pendientes__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__directives_resaltado_directive__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pendientes_pendientes__["a" /* PendientesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_terminados_terminados__["a" /* TerminadosPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_agregar_agregar__["a" /* AgregarPage */],
                __WEBPACK_IMPORTED_MODULE_11__pipes_placeholder_placeholder__["a" /* PlaceholderPipe */],
                __WEBPACK_IMPORTED_MODULE_12__pages_detalle_detalle__["a" /* DetallePage */],
                __WEBPACK_IMPORTED_MODULE_13__pipes_pendientes_pendientes__["a" /* PendientesPipe */],
                __WEBPACK_IMPORTED_MODULE_14__directives_resaltado_directive__["a" /* ResaltadoDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/agregar/agregar.module#AgregarPageModule', name: 'AgregarPage', segment: 'agregar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalle/detalle.module#DetallePageModule', name: 'DetallePage', segment: 'detalle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pendientes/pendientes.module#PendientesPageModule', name: 'PendientesPage', segment: 'pendientes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terminados/terminados.module#TerminadosPageModule', name: 'TerminadosPage', segment: 'terminados', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pendientes_pendientes__["a" /* PendientesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_terminados_terminados__["a" /* TerminadosPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_agregar_agregar__["a" /* AgregarPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_detalle_detalle__["a" /* DetallePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_lista_deseos_lista_deseos__["a" /* ListaDeseosProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaItem; });
var ListaItem = (function () {
    function ListaItem() {
    }
    return ListaItem;
}());

//# sourceMappingURL=lista-item.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lista; });
var Lista = (function () {
    function Lista(nombre) {
        this.nombre = nombre;
        this.terminada = false;
    }
    return Lista;
}());

//# sourceMappingURL=listas.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/carlosestevez/curso-angular4/Aplicaciones/5.Deseos/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/carlosestevez/curso-angular4/Aplicaciones/5.Deseos/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceholderPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PlaceholderPipe = (function () {
    function PlaceholderPipe() {
    }
    PlaceholderPipe.prototype.transform = function (value, defecto) {
        return (value) ? value : defecto;
    };
    PlaceholderPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'placeholder',
        })
    ], PlaceholderPipe);
    return PlaceholderPipe;
}());

//# sourceMappingURL=placeholder.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendientesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PendientesPipe = (function () {
    function PendientesPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    PendientesPipe.prototype.transform = function (listas, estado) {
        var nuevaLista = [];
        for (var _i = 0, listas_1 = listas; _i < listas_1.length; _i++) {
            var lista = listas_1[_i];
            if (lista.terminada == estado) {
                nuevaLista.push(lista);
            }
        }
        return nuevaLista;
    };
    PendientesPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'pendientes',
            pure: false
        })
    ], PendientesPipe);
    return PendientesPipe;
}());

//# sourceMappingURL=pendientes.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResaltadoDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResaltadoDirective = (function () {
    function ResaltadoDirective(el) {
        this.el = el;
        console.log("directiva llamada");
        //el.nativeElement.style.backgroundColor = "cyan";
    }
    ResaltadoDirective.prototype.mouseEntro = function () {
        this.resaltar(this.nuevoColor || 'cyan');
    };
    ResaltadoDirective.prototype.mouseSalir = function () {
        this.resaltar(null);
    };
    ResaltadoDirective.prototype.resaltar = function (color) {
        this.el.nativeElement.style.backgroundColor = color;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("appResaltado"),
        __metadata("design:type", String)
    ], ResaltadoDirective.prototype, "nuevoColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ResaltadoDirective.prototype, "mouseEntro", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ResaltadoDirective.prototype, "mouseSalir", null);
    ResaltadoDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appResaltado]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], ResaltadoDirective);
    return ResaltadoDirective;
}());

//# sourceMappingURL=resaltado.directive.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaDeseosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListaDeseosProvider = (function () {
    function ListaDeseosProvider() {
        this.listas = [];
        /* let lista1 = new Lista('Compras de supermercado');
        let lista2 = new Lista('Juegos que deseo');
        let lista3 = new Lista('Cosas de la universidad');
    
        this.listas.push(lista1);
        this.listas.push(lista2);
        this.listas.push(lista3); */
        this.cargarData();
        console.log('Hello ListaDeseosProvider Provider');
    }
    ListaDeseosProvider.prototype.actualizarData = function () {
        localStorage.setItem("data", JSON.stringify(this.listas));
    };
    ListaDeseosProvider.prototype.cargarData = function () {
        if (localStorage.getItem("data")) {
            this.listas = JSON.parse(localStorage.getItem("data"));
        }
    };
    ListaDeseosProvider.prototype.agregarLista = function (lista) {
        this.listas.push(lista);
        this.actualizarData();
    };
    ListaDeseosProvider.prototype.borrarLista = function (idx) {
        this.listas.splice(idx, 1);
        this.actualizarData();
    };
    ListaDeseosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ListaDeseosProvider);
    return ListaDeseosProvider;
}());

//# sourceMappingURL=lista-deseos.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_lista_deseos_lista_deseos__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetallePage = (function () {
    function DetallePage(navCtrl, navParams, _listaDeseos, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._listaDeseos = _listaDeseos;
        this.alertCtrl = alertCtrl;
        this.idx = this.navParams.get("idx");
        this.lista = this.navParams.get("lista");
    }
    DetallePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetallePage');
    };
    DetallePage.prototype.actualizar = function (item) {
        item.completado = !item.completado;
        var todosMarcados = true;
        for (var _i = 0, _a = this.lista.items; _i < _a.length; _i++) {
            var item_1 = _a[_i];
            if (!item_1.completado) {
                todosMarcados = false;
                break;
            }
        }
        this.lista.terminada = todosMarcados;
        this._listaDeseos.actualizarData();
    };
    DetallePage.prototype.borrarItem = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: '¿Esta seguro que desea eliminar la lista?',
            message: 'Desea borrar este item?',
            buttons: ['Cancelar',
                {
                    text: 'Eliminar',
                    handler: function () {
                        //console.log('Eliminar');
                        _this._listaDeseos.borrarLista(_this.idx);
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        confirm.present();
    };
    DetallePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalle',template:/*ion-inline-start:"/home/carlosestevez/curso-angular4/Aplicaciones/5.Deseos/src/pages/detalle/detalle.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{lista.nombre}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-item>\n        <ion-label floating>Nombre de la lista</ion-label>\n        <ion-input type="text" [(ngModel)]="lista.nombre"></ion-input>\n      </ion-item>  \n      <hr/> \n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item *ngFor="let item of lista.items" (click)="actualizar(item)">\n          <ion-icon item-left *ngIf="!item.completado" ios="ios-square-outline" md="md-square-outline"></ion-icon>\n          <ion-icon item-left *ngIf="item.completado" ios="ios-checkbox-outline" md="md-checkbox-outline"></ion-icon>\n          <h2 [class.tachado]="item.completado">{{item.nombre}}</h2>\n        </ion-item>\n      </ion-list>\n\n      <br><br>\n      <button ion-button (click)= "borrarItem()" class="button-block" color="danger">Borrar lista</button>\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/home/carlosestevez/curso-angular4/Aplicaciones/5.Deseos/src/pages/detalle/detalle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_lista_deseos_lista_deseos__["a" /* ListaDeseosProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DetallePage);
    return DetallePage;
}());

//# sourceMappingURL=detalle.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map