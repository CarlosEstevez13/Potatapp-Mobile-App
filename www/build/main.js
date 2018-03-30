webpackJsonp([12],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregarActividadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_finca_finca__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AgregarActividadPage = /** @class */ (function () {
    function AgregarActividadPage(navCtrl, navParams, _fincaService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._fincaService = _fincaService;
        this.error = false;
    }
    AgregarActividadPage.prototype.guardar = function () {
        var _this = this;
        if (this.estado === true) {
            console.log('if 1');
            this.estado_activi = '1';
        }
        else {
            console.log('if 0');
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
        console.log(this.descripcion);
        this._fincaService.postActividad(this.descripcion).subscribe(function (res) {
            console.log(res);
            if (!res) {
                _this.error = true;
            }
            else {
                _this.navCtrl.pop();
            }
        }, function (e) {
            if (e) {
                _this.error = true;
            }
            console.log(e);
        });
    };
    AgregarActividadPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad AgregarActividadPage");
    };
    AgregarActividadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-agregar-actividad",template:/*ion-inline-start:"/home/carlosestevez/U/software2/potatapp/potatapp_v2/myApp/src/pages/agregar-actividad/agregar-actividad.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>agregarActividad</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Nombre</ion-label>\n      <ion-input type="text" [(ngModel)]="nombre_activi"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Fecha</ion-label>\n      <ion-input type="date" [(ngModel)]="fecha_activi"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Numero de Jornales</ion-label>\n      <ion-input type="text"  [(ngModel)]="num_jornales"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Estado</ion-label>\n        <ion-checkbox [(ngModel)]="estado" color="dark"></ion-checkbox>\n      </ion-item>\n\n\n    <ion-item>\n      <ion-label floating>Descripcion</ion-label>\n      <ion-input type="text" [(ngModel)]="descripcion_activi"></ion-input>\n    </ion-item>\n\n    <ion-card *ngIf="error">\n        <ion-card-header color="danger">\n          Debe llenar todos los campos\n        </ion-card-header>\n      </ion-card>\n\n    <button ion-button color="secondary" block (click)="guardar()">Guardar</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/carlosestevez/U/software2/potatapp/potatapp_v2/myApp/src/pages/agregar-actividad/agregar-actividad.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_finca_finca__["a" /* FincaProvider */]])
    ], AgregarActividadPage);
    return AgregarActividadPage;
}());

//# sourceMappingURL=agregar-actividad.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescripcionActividadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_finca_finca__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editar_actividad_editar_actividad__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DescripcionActividadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DescripcionActividadPage = /** @class */ (function () {
    function DescripcionActividadPage(navCtrl, navParams, _fincaService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._fincaService = _fincaService;
        this.getDescripcion();
    }
    DescripcionActividadPage.prototype.ngOnChanges = function () {
        console.log('algo cambio');
    };
    DescripcionActividadPage.prototype.getDescripcion = function () {
        var _this = this;
        this._fincaService.getActividadDesc().subscribe(function (res) {
            _this.descripcion = res.result;
            console.log(_this.descripcion);
        }, function (e) {
            console.log(e);
        });
        return this.descripcion;
    };
    DescripcionActividadPage.prototype.editar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__editar_actividad_editar_actividad__["a" /* EditarActividadPage */]);
        /* this.navCtrl.setRoot(EditarActividadPage); */
    };
    DescripcionActividadPage.prototype.ionViewDidEnter = function () {
        this.getDescripcion();
    };
    DescripcionActividadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DescripcionActividadPage');
    };
    DescripcionActividadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-descripcion-actividad',template:/*ion-inline-start:"/home/carlosestevez/U/software2/potatapp/potatapp_v2/myApp/src/pages/descripcion-actividad/descripcion-actividad.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>DESCRIPCION</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n  <ion-item-group *ngFor="let d of descripcion">\n    <ion-item-divider color="light">\n      <h1>{{d.nombre_activi | uppercase}}</h1>\n    </ion-item-divider>\n\n    <ion-item>\n      Descripcion: {{d.descripcion_activi}}\n    </ion-item>\n    <ion-item>\n      Fecha: {{d.fecha_activi}}\n    </ion-item>\n    <ion-item>\n      Numero de Jornales: {{d.num_jornales}}\n    </ion-item>\n    <ion-item *ngIf="d.estado_activi==1">\n      Estado: Activo\n    </ion-item>\n    <ion-item *ngIf="d.estado_activi==0">\n      Estado: Inactivo\n    </ion-item>\n      <button ion-button color="secondary" block (click)="editar()" item-right>Editar</button>\n  </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"/home/carlosestevez/U/software2/potatapp/potatapp_v2/myApp/src/pages/descripcion-actividad/descripcion-actividad.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_finca_finca__["a" /* FincaProvider */]])
    ], DescripcionActividadPage);
    return DescripcionActividadPage;
}());

//# sourceMappingURL=descripcion-actividad.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarActividadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_finca_finca__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditarActividadPage = /** @class */ (function () {
    function EditarActividadPage(navCtrl, navParams, _fincaService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._fincaService = _fincaService;
        this.getDescripcion();
        this.error = false;
    }
    EditarActividadPage.prototype.ngOnChanges = function (changes) {
        console.log(changes);
    };
    EditarActividadPage.prototype.getDescripcion = function () {
        var _this = this;
        this._fincaService.getActividadDesc().subscribe(function (res) {
            _this.descripcion = res.result;
            console.log(_this.descripcion);
            if (_this.descripcion[0].estado_activi == 0) {
                _this.estado = false;
            }
            else {
                _this.estado = true;
            }
        }, function (e) {
            console.log(e);
        });
    };
    EditarActividadPage.prototype.guardar = function () {
        var _this = this;
        if (this.estado === true) {
            console.log('if 1');
            this.descripcion[0].estado_activi = '1';
            console.log(this.descripcion[0].estado_activi);
        }
        else {
            console.log('if 0');
            this.descripcion[0].estado_activi = '0';
            console.log(this.descripcion[0].estado_activi);
        }
        console.log(this.descripcion[0]);
        this._fincaService.putActividad(this.descripcion[0]).subscribe(function (res) {
            if (!res) {
                _this.error = true;
            }
            else {
                _this.navCtrl.pop();
            }
        }, function (e) {
            if (e) {
                _this.error = true;
            }
            console.log(e);
        });
    };
    EditarActividadPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad EditarActividadPage");
    };
    EditarActividadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-editar-actividad",template:/*ion-inline-start:"/home/carlosestevez/U/software2/potatapp/potatapp_v2/myApp/src/pages/editar-actividad/editar-actividad.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>EDITAR ACTIVIDAD</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n  <ion-list *ngFor="let d of descripcion">\n\n    <ion-item>\n      <ion-label floating>Nombre</ion-label>\n      <ion-input type="text" [(ngModel)]="d.nombre_activi"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Fecha</ion-label>\n      <ion-input type="date" [(ngModel)]="d.fecha_activi"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Numero de Jornales</ion-label>\n      <ion-input type="text"  [(ngModel)]="d.num_jornales"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Estado</ion-label>\n        <ion-checkbox [(ngModel)]="estado" color="dark"></ion-checkbox>\n      </ion-item>\n\n    <ion-item>\n      <ion-label floating>Descripcion</ion-label>\n      <ion-input type="text" [(ngModel)]="d.descripcion_activi"></ion-input>\n    </ion-item>\n\n    <ion-card *ngIf="error">\n        <ion-card-header color="danger">\n          Debe llenar todos los campos\n        </ion-card-header>\n      </ion-card>\n\n    <button ion-button color="secondary" block (click)="guardar()">Guardar</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/carlosestevez/U/software2/potatapp/potatapp_v2/myApp/src/pages/editar-actividad/editar-actividad.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_finca_finca__["a" /* FincaProvider */]])
    ], EditarActividadPage);
    return EditarActividadPage;
}());

//# sourceMappingURL=editar-actividad.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescripcionFincaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_finca_finca__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editar_finca_editar_finca__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DescripcionFincaPage = /** @class */ (function () {
    function DescripcionFincaPage(navCtrl, navParams, _fincaService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._fincaService = _fincaService;
        this.getDescripcion();
    }
    DescripcionFincaPage.prototype.getDescripcion = function () {
        var _this = this;
        this._fincaService.getFincaDesc().subscribe(function (res) {
            _this.descripcion = res.result;
            console.log(_this.descripcion);
        }, function (e) {
            console.log(e);
        });
        return this.descripcion;
    };
    DescripcionFincaPage.prototype.editar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__editar_finca_editar_finca__["a" /* EditarFincaPage */]);
        /* this.navCtrl.setRoot(EditarActividadPage); */
    };
    DescripcionFincaPage.prototype.ionViewDidEnter = function () {
        this.getDescripcion();
    };
    DescripcionFincaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DescripcionFincaPage');
    };
    DescripcionFincaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-descripcion-finca',template:/*ion-inline-start:"/home/carlosestevez/U/software2/potatapp/potatapp_v2/myApp/src/pages/descripcion-finca/descripcion-finca.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>DESCRIPCION</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n  <ion-item-group *ngFor="let f of descripcion">\n    <ion-item-divider color="light">\n      <h1>{{f.nombre_finca | uppercase}}</h1>\n    </ion-item-divider>\n\n    <ion-item>\n      Ubicacion: {{f.ubicacion_finca}}\n    </ion-item>\n    <ion-item>\n      Descripcion: {{f.descripcion_finca}}\n    </ion-item>\n    <ion-item>\n      trabajador: {{f.trabajador_encargado}}\n    </ion-item>\n      <button ion-button color="secondary" block (click)="editar()" item-right>Editar</button>\n  </ion-item-group>\n</ion-content>\n\n'/*ion-inline-end:"/home/carlosestevez/U/software2/potatapp/potatapp_v2/myApp/src/pages/descripcion-finca/descripcion-finca.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_finca_finca__["a" /* FincaProvider */]])
    ], DescripcionFincaPage);
    return DescripcionFincaPage;
}());

//# sourceMappingURL=descripcion-finca.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarFincaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EditarFincaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditarFincaPage = /** @class */ (function () {
    function EditarFincaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditarFincaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditarFincaPage');
    };
    EditarFincaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editar-finca',template:/*ion-inline-start:"/home/carlosestevez/U/software2/potatapp/potatapp_v2/myApp/src/pages/editar-finca/editar-finca.html"*/'<!--\n  Generated template for the EditarFincaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>editarFinca</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/carlosestevez/U/software2/potatapp/potatapp_v2/myApp/src/pages/editar-finca/editar-finca.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EditarFincaPage);
    return EditarFincaPage;
}());

//# sourceMappingURL=editar-finca.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestionarActividadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_finca_finca__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__descripcion_actividad_descripcion_actividad__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agregar_actividad_agregar_actividad__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GestionarActividadPage = /** @class */ (function () {
    function GestionarActividadPage(navCtrl, navParams, _fincaService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._fincaService = _fincaService;
        this.getActividades();
        this.finca = this._fincaService.getIdFinca();
    }
    GestionarActividadPage.prototype.getActividades = function () {
        var _this = this;
        this._fincaService.getActividades().subscribe(function (res) {
            _this.actividades = res.result;
            console.log(_this.actividades);
        }, function (e) {
            console.log(e);
        });
    };
    GestionarActividadPage.prototype.irDescripcion = function (id) {
        this._fincaService.setIdActividad(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__descripcion_actividad_descripcion_actividad__["a" /* DescripcionActividadPage */]);
    };
    GestionarActividadPage.prototype.agregar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__agregar_actividad_agregar_actividad__["a" /* AgregarActividadPage */]);
    };
    GestionarActividadPage.prototype.ionViewDidEnter = function () {
        this.getActividades();
    };
    GestionarActividadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GestionarActividadPage');
    };
    GestionarActividadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gestionar-actividad',template:/*ion-inline-start:"/home/carlosestevez/U/software2/potatapp/potatapp_v2/myApp/src/pages/gestionar-actividad/gestionar-actividad.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>ACTIVIDADES FINCA {{finca}}</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content padding>\n\n    <ion-item-group>\n      <ion-item-divider color="light">\n        <h1> Gestionar Actividades</h1>\n      </ion-item-divider>\n      <ion-item *ngFor="let actividad of actividades">\n        {{actividad.nombre_activi | uppercase}}\n        <button ion-button outline item-right (click)="irDescripcion(actividad.id_activi)">Ver</button>\n      </ion-item>\n    </ion-item-group>\n\n    <ion-fab right bottom>\n      <button ion-fab color="primary" (click)="agregar()">\n        <ion-icon ios="ios-add" md="md-add"></ion-icon>\n      </button>\n    </ion-fab>\n\n  </ion-content>\n\n'/*ion-inline-end:"/home/carlosestevez/U/software2/potatapp/potatapp_v2/myApp/src/pages/gestionar-actividad/gestionar-actividad.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_finca_finca__["a" /* FincaProvider */]])
    ], GestionarActividadPage);
    return GestionarActividadPage;
}());

//# sourceMappingURL=gestionar-actividad.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestionarEmpleadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GestionarEmpleadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GestionarEmpleadosPage = /** @class */ (function () {
    function GestionarEmpleadosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GestionarEmpleadosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GestionarEmpleadosPage');
    };
    GestionarEmpleadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gestionar-empleados',template:/*ion-inline-start:"/home/carlosestevez/U/software2/potatapp/potatapp_v2/myApp/src/pages/gestionar-empleados/gestionar-empleados.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>GESTIONAR EMPLEADOS</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="irAgregar()">\n      <ion-icon ios="ios-add" md="md-add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/carlosestevez/U/software2/potatapp/potatapp_v2/myApp/src/pages/gestionar-empleados/gestionar-empleados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], GestionarEmpleadosPage);
    return GestionarEmpleadosPage;
}());

//# sourceMappingURL=gestionar-empleados.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestionarFincaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_finca_finca__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gestionar_actividad_gestionar_actividad__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__descripcion_finca_descripcion_finca__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the GestionarFincaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GestionarFincaPage = /** @class */ (function () {
    function GestionarFincaPage(navCtrl, navParams, _fincasService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._fincasService = _fincasService;
        this.getFincas();
    }
    GestionarFincaPage.prototype.getFincas = function () {
        var _this = this;
        this._fincasService.getFincas().subscribe(function (res) {
            _this.fincas = res.result;
            console.log(_this.fincas);
        }, function (e) {
            console.log(e);
        });
    };
    GestionarFincaPage.prototype.irDescripcion = function (id) {
        this._fincasService.setIdFinca(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__descripcion_finca_descripcion_finca__["a" /* DescripcionFincaPage */]);
    };
    GestionarFincaPage.prototype.irActividades = function (id) {
        this._fincasService.setIdFinca(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__gestionar_actividad_gestionar_actividad__["a" /* GestionarActividadPage */]);
    };
    GestionarFincaPage.prototype.ionViewDidEnter = function () {
        this.getFincas();
    };
    GestionarFincaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GestionarFincaPage');
    };
    GestionarFincaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gestionar-finca',template:/*ion-inline-start:"/home/carlosestevez/U/software2/potatapp/potatapp_v2/myApp/src/pages/gestionar-finca/gestionar-finca.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>GESTIONAR FINCA</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item-group>\n    <ion-item-divider color="light">\n      <h1>Fincas</h1>\n    </ion-item-divider>\n    <ion-item *ngFor="let finca of fincas">\n      {{finca.nombre_finca | uppercase}}\n      <button ion-button outline item-right (click)="irActividades(finca.id_finca)">Actividades</button>\n      <button ion-button color="secondary" (click)="irDescripcion(finca.id_finca)" item-right>Ver</button>\n    </ion-item>\n  </ion-item-group>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="irAgregar()">\n      <ion-icon ios="ios-add" md="md-add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/carlosestevez/U/software2/potatapp/potatapp_v2/myApp/src/pages/gestionar-finca/gestionar-finca.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_finca_finca__["a" /* FincaProvider */]])
    ], GestionarFincaPage);
    return GestionarFincaPage;
}());

//# sourceMappingURL=gestionar-finca.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HistorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistorialPage = /** @class */ (function () {
    function HistorialPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HistorialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistorialPage');
    };
    HistorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-historial',template:/*ion-inline-start:"/home/carlosestevez/U/software2/potatapp/potatapp_v2/myApp/src/pages/historial/historial.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>HISTORIAL</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/carlosestevez/U/software2/potatapp/potatapp_v2/myApp/src/pages/historial/historial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HistorialPage);
    return HistorialPage;
}());

//# sourceMappingURL=historial.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/agregar-actividad/agregar-actividad.module": [
		284,
		11
	],
	"../pages/agregar-empleado/agregar-empleado.module": [
		285,
		10
	],
	"../pages/agregar-finca/agregar-finca.module": [
		286,
		9
	],
	"../pages/descripcion-actividad/descripcion-actividad.module": [
		287,
		8
	],
	"../pages/descripcion-finca/descripcion-finca.module": [
		288,
		7
	],
	"../pages/editar-actividad/editar-actividad.module": [
		289,
		6
	],
	"../pages/editar-empleado/editar-empleado.module": [
		290,
		5
	],
	"../pages/editar-finca/editar-finca.module": [
		291,
		4
	],
	"../pages/gestionar-actividad/gestionar-actividad.module": [
		292,
		3
	],
	"../pages/gestionar-empleados/gestionar-empleados.module": [
		293,
		2
	],
	"../pages/gestionar-finca/gestionar-finca.module": [
		294,
		1
	],
	"../pages/historial/historial.module": [
		295,
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
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/carlosestevez/U/software2/potatapp/potatapp_v2/myApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>INICIO</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/carlosestevez/U/software2/potatapp/potatapp_v2/myApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregarEmpleadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AgregarEmpleadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgregarEmpleadoPage = /** @class */ (function () {
    function AgregarEmpleadoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AgregarEmpleadoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgregarEmpleadoPage');
    };
    AgregarEmpleadoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agregar-empleado',template:/*ion-inline-start:"/home/carlosestevez/U/software2/potatapp/potatapp_v2/myApp/src/pages/agregar-empleado/agregar-empleado.html"*/'<!--\n  Generated template for the AgregarEmpleadoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>agregarEmpleado</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/carlosestevez/U/software2/potatapp/potatapp_v2/myApp/src/pages/agregar-empleado/agregar-empleado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AgregarEmpleadoPage);
    return AgregarEmpleadoPage;
}());

//# sourceMappingURL=agregar-empleado.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregarFincaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AgregarFincaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgregarFincaPage = /** @class */ (function () {
    function AgregarFincaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AgregarFincaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgregarFincaPage');
    };
    AgregarFincaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agregar-finca',template:/*ion-inline-start:"/home/carlosestevez/U/software2/potatapp/potatapp_v2/myApp/src/pages/agregar-finca/agregar-finca.html"*/'<!--\n  Generated template for the AgregarFincaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>agregarFinca</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/carlosestevez/U/software2/potatapp/potatapp_v2/myApp/src/pages/agregar-finca/agregar-finca.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AgregarFincaPage);
    return AgregarFincaPage;
}());

//# sourceMappingURL=agregar-finca.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarEmpleadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EditarEmpleadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditarEmpleadoPage = /** @class */ (function () {
    function EditarEmpleadoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditarEmpleadoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditarEmpleadoPage');
    };
    EditarEmpleadoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editar-empleado',template:/*ion-inline-start:"/home/carlosestevez/U/software2/potatapp/potatapp_v2/myApp/src/pages/editar-empleado/editar-empleado.html"*/'<!--\n  Generated template for the EditarEmpleadoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>editarEmpleado</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/carlosestevez/U/software2/potatapp/potatapp_v2/myApp/src/pages/editar-empleado/editar-empleado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EditarEmpleadoPage);
    return EditarEmpleadoPage;
}());

//# sourceMappingURL=editar-empleado.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_gestionar_empleados_gestionar_empleados__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_gestionar_finca_gestionar_finca__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_gestionar_actividad_gestionar_actividad__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_historial_historial__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_descripcion_finca_descripcion_finca__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_descripcion_actividad_descripcion_actividad__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_editar_actividad_editar_actividad__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_agregar_actividad_agregar_actividad__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_agregar_finca_agregar_finca__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_agregar_empleado_agregar_empleado__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_editar_finca_editar_finca__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_editar_empleado_editar_empleado__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_finca_finca__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_gestionar_empleados_gestionar_empleados__["a" /* GestionarEmpleadosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_gestionar_finca_gestionar_finca__["a" /* GestionarFincaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_gestionar_actividad_gestionar_actividad__["a" /* GestionarActividadPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_historial_historial__["a" /* HistorialPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_descripcion_finca_descripcion_finca__["a" /* DescripcionFincaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_descripcion_actividad_descripcion_actividad__["a" /* DescripcionActividadPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_editar_actividad_editar_actividad__["a" /* EditarActividadPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_agregar_actividad_agregar_actividad__["a" /* AgregarActividadPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_agregar_finca_agregar_finca__["a" /* AgregarFincaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_agregar_empleado_agregar_empleado__["a" /* AgregarEmpleadoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_editar_finca_editar_finca__["a" /* EditarFincaPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_editar_empleado_editar_empleado__["a" /* EditarEmpleadoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/agregar-actividad/agregar-actividad.module#AgregarActividadPageModule', name: 'AgregarActividadPage', segment: 'agregar-actividad', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/agregar-empleado/agregar-empleado.module#AgregarEmpleadoPageModule', name: 'AgregarEmpleadoPage', segment: 'agregar-empleado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/agregar-finca/agregar-finca.module#AgregarFincaPageModule', name: 'AgregarFincaPage', segment: 'agregar-finca', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/descripcion-actividad/descripcion-actividad.module#DescripcionActividadPageModule', name: 'DescripcionActividadPage', segment: 'descripcion-actividad', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/descripcion-finca/descripcion-finca.module#DescripcionFincaPageModule', name: 'DescripcionFincaPage', segment: 'descripcion-finca', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editar-actividad/editar-actividad.module#EditarActividadPageModule', name: 'EditarActividadPage', segment: 'editar-actividad', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editar-empleado/editar-empleado.module#EditarEmpleadoPageModule', name: 'EditarEmpleadoPage', segment: 'editar-empleado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editar-finca/editar-finca.module#EditarFincaPageModule', name: 'EditarFincaPage', segment: 'editar-finca', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gestionar-actividad/gestionar-actividad.module#GestionarActividadPageModule', name: 'GestionarActividadPage', segment: 'gestionar-actividad', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gestionar-empleados/gestionar-empleados.module#GestionarEmpleadosPageModule', name: 'GestionarEmpleadosPage', segment: 'gestionar-empleados', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gestionar-finca/gestionar-finca.module#GestionarFincaPageModule', name: 'GestionarFincaPage', segment: 'gestionar-finca', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historial/historial.module#HistorialPageModule', name: 'HistorialPage', segment: 'historial', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_21__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_http__["d" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_gestionar_empleados_gestionar_empleados__["a" /* GestionarEmpleadosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_gestionar_finca_gestionar_finca__["a" /* GestionarFincaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_gestionar_actividad_gestionar_actividad__["a" /* GestionarActividadPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_historial_historial__["a" /* HistorialPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_descripcion_finca_descripcion_finca__["a" /* DescripcionFincaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_descripcion_actividad_descripcion_actividad__["a" /* DescripcionActividadPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_editar_actividad_editar_actividad__["a" /* EditarActividadPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_agregar_actividad_agregar_actividad__["a" /* AgregarActividadPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_agregar_finca_agregar_finca__["a" /* AgregarFincaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_agregar_empleado_agregar_empleado__["a" /* AgregarEmpleadoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_editar_empleado_editar_empleado__["a" /* EditarEmpleadoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_editar_finca_editar_finca__["a" /* EditarFincaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_finca_finca__["a" /* FincaProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_gestionar_empleados_gestionar_empleados__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_gestionar_finca_gestionar_finca__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_historial_historial__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Inicio', icono: "home", component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Gestionar Finca', icono: 'paper', component: __WEBPACK_IMPORTED_MODULE_6__pages_gestionar_finca_gestionar_finca__["a" /* GestionarFincaPage */] },
            { title: 'Gestionar Empleados', icono: 'people', component: __WEBPACK_IMPORTED_MODULE_5__pages_gestionar_empleados_gestionar_empleados__["a" /* GestionarEmpleadosPage */] },
            { title: 'Historial', icono: 'list', component: __WEBPACK_IMPORTED_MODULE_7__pages_historial_historial__["a" /* HistorialPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/carlosestevez/U/software2/potatapp/potatapp_v2/myApp/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n        <ion-icon [name]="p.icono" item-right></ion-icon>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/carlosestevez/U/software2/potatapp/potatapp_v2/myApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FincaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/* import { Observable } from "rxjs/Observable"; */
var FincaProvider = /** @class */ (function () {
    function FincaProvider(_http) {
        this._http = _http;
        this.url = "http://localhost:3546/api/";
    }
    FincaProvider.prototype.setIdFinca = function (id) {
        this.idFinca = id;
    };
    FincaProvider.prototype.getIdFinca = function () {
        return this.idFinca;
    };
    FincaProvider.prototype.setIdActividad = function (id) {
        this.idActividad = id;
    };
    FincaProvider.prototype.getIdActividad = function () {
        return this.idActividad;
    };
    FincaProvider.prototype.getFincas = function () {
        return this._http.get(this.url + "fincas").map(function (res) { return res.json(); });
    };
    FincaProvider.prototype.getActividades = function () {
        return this._http.get(this.url + ("actividades/" + this.getIdFinca())).map(function (res) { return res.json(); });
    };
    FincaProvider.prototype.getActividadDesc = function () {
        console.log('entro a Fincas service');
        console.log(this.getIdActividad());
        return this._http.get(this.url + ("actividad/" + this.getIdActividad())).map(function (res) { return res.json(); });
    };
    FincaProvider.prototype.getFincaDesc = function () {
        console.log('entro a Fincas service');
        console.log(this.getIdFinca());
        return this._http.get(this.url + ("finca/" + this.getIdFinca())).map(function (res) { return res.json(); });
    };
    FincaProvider.prototype.putActividad = function (actividad) {
        var json = JSON.stringify(actividad);
        var params = json;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.put(this.url + ("actividad/" + actividad.id_activi), params, { headers: headers }).map(function (res) { return res.json(); });
    };
    FincaProvider.prototype.postActividad = function (actividad) {
        var json = JSON.stringify(actividad);
        var params = json;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + "actividad", params, { headers: headers }).map(function (res) { return res.json(); });
    };
    FincaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], FincaProvider);
    return FincaProvider;
}());

//# sourceMappingURL=finca.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map