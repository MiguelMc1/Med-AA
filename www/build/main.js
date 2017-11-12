webpackJsonp([3],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient_db_patient_db__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__make_appointment_make_appointment__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reg_patient_reg_patient__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.changePage = function (link) {
        if (link == "patientDB") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__patient_db_patient_db__["b" /* PatientDBPage */]);
        }
        else if (link == "regPatient") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__reg_patient_reg_patient__["a" /* RegPatientPage */]);
        }
        else if (link == "makeAppointment") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__make_appointment_make_appointment__["a" /* MakeAppointmentPage */]);
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\lucero\Documents\7 Sem\Pensamiento creativo\Med-AA\src\pages\home\home.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="card-background-page">\n\n  <ion-card (click)="changePage(\'regPatient\')">\n\n    <img src="assets/imgs/NuevoPaciente.jpg"/>\n\n    <div class="card-title">Paciente Nuevo</div>\n\n    <div class="card-subtitle">41 Listings</div>\n\n  </ion-card>\n\n\n\n  <ion-card (click)="changePage(\'patientDB\')">\n\n    <img src="assets/imgs/pacientes.jpg"/>\n\n    <div class="card-title">Pacientes</div>\n\n    <div class="card-subtitle">64 Listings</div>\n\n  </ion-card>\n\n\n\n  <ion-card (click)="changePage(\'makeAppointment\')">\n\n    <img src="assets/imgs/PDB.jpg"/>\n\n    <div class="card-title">Agendar citas</div>\n\n    <div class="card-subtitle">72 Listings</div>\n\n  </ion-card>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\lucero\Documents\7 Sem\Pensamiento creativo\Med-AA\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeAppointmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__(192);
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
 * Generated class for the MakeAppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MakeAppointmentPage = (function () {
    function MakeAppointmentPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    MakeAppointmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MakeAppointmentPage');
    };
    MakeAppointmentPage.prototype.changePage = function (Home) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* MyApp */], {});
    };
    MakeAppointmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-make-appointment',template:/*ion-inline-start:"C:\Users\lucero\Documents\7 Sem\Pensamiento creativo\Med-AA\src\pages\make-appointment\make-appointment.html"*/`<!--\n\n  Generated template for the MakeAppointmentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Agendar Cita</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <iframe id="bookingCalendar" src="https://med-aa.appointlet.com/s/cita-medica" style="width: 100%; max-width: 100%; height: 550px; border: 0; padding: 0; margin: 0;"></iframe>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\lucero\Documents\7 Sem\Pensamiento creativo\Med-AA\src\pages\make-appointment\make-appointment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MakeAppointmentPage);
    return MakeAppointmentPage;
}());

//# sourceMappingURL=make-appointment.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegPatientPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { PostService } from '../../providers/post-service';

var RegPatientPage = (function () {
    /*private birth: any;
    private insurance: any;
    private address: any;
    private cp: any;
    private city: any;
    private tel: any;
    private cel: any;
    private email: any;
    private blood: any;
    private Mallergic: any;
    private Oallergic: any;
    private medicament: any;
    private surgeries: any;
    private pathology: any;
    private age: any;
    private weight: any;
    private height: any;
    private cons: any;
    private symptom: any;
    private temperature: any;*/
    function RegPatientPage(navCtrl, navParams, loadingCrtl, alertCtrl, af) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCrtl = loadingCrtl;
        this.alertCtrl = alertCtrl;
        this.af = af;
    }
    RegPatientPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegPatientPage');
    };
    RegPatientPage.prototype.done = function (name, lastname, gender) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Registro Completado',
            buttons: [{
                    text: "OK",
                    handler: function (data) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                    }
                }]
        });
        var loading = this.loadingCrtl.create({
            dismissOnPageChange: true,
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 1000);
        this.af.list('/patients').push({ name: name, lastname: lastname, gender: gender })
            .then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        });
        alert.present();
    };
    RegPatientPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reg-patient',template:/*ion-inline-start:"C:\Users\lucero\Documents\7 Sem\Pensamiento creativo\Med-AA\src\pages\reg-patient\reg-patient.html"*/`<!--\n\n  Generated template for the RegPatientPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Registro de Pacientes</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<ion-list>\n\n  <h3 text-center>Datos Personales</h3>\n\n  <ion-item>\n\n    <ion-label stacked>Nombre(s)</ion-label>\n\n    <ion-input type="text"[(ngModel)]="name"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Apellidos</ion-label>\n\n    <ion-input type="text" [(ngModel)]="lastname"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Genero (Femenino o Masculino)</ion-label>\n\n    <ion-input type="text" [(ngModel)]="gender"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Fecha de nacimiento</ion-label>\n\n    <ion-datetime displayFormat="DD MMM YYYY"  [(ngModel)]="birth"></ion-datetime>\n\n    <!--<ion-input type="text"  [(ngModel)]="birth"></ion-input>-->\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>No. de Seguro Médico (Si no tiene favor de ingresar NA)</ion-label>\n\n    <ion-input type="text" [(ngModel)]="insurance"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Dirección</ion-label>\n\n    <ion-textarea type="text" [(ngModel)]="address"></ion-textarea>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Código Postal</ion-label>\n\n    <ion-input type="text" [(ngModel)]="cp"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Ciudad</ion-label>\n\n    <ion-input type="text" [(ngModel)]="city"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Teléfono</ion-label>\n\n    <ion-input type="tel" [(ngModel)]="tel"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Celular</ion-label>\n\n    <ion-input type="tel" [(ngModel)]="cel"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>E-Mail</ion-label>\n\n    <ion-input type="email" [(ngModel)]="email"></ion-input>\n\n  </ion-item>\n\n    <h3 text-center>Datos Médicos</h3>\n\n    <ion-item>\n\n      <ion-label stacked>Tipo de sangre</ion-label>\n\n      <ion-input type="text" [(ngModel)]="blood"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>¿Eres alergico a algun medicamento?</ion-label>\n\n      <ion-textarea type="text"  rows="5" placeholder="¿Eres alergico a algun medicamento? En caso afirmativo, Especifique a cuál o cuáles:" [(ngModel)]="Mallergic"></ion-textarea>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>¿Tiene alguna otra alergia?</ion-label>\n\n      <ion-textarea type="text" placeholder="¿Tiene alguna otra alergia? En caso afirmativo, Especifique a cuál o cuáles:" [(ngModel)]="Oallergic"></ion-textarea>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>¿Toma algún medicamento en la actualidad?</ion-label>\n\n      <ion-textarea type="text" placeholder="¿Toma algún medicamento en la actualidad? En caso afirmativo, Especifique a cuál o cuáles:" [(ngModel)]="medicament"></ion-textarea>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>¿Le han intervenido quirúrgicamente?</ion-label>\n\n      <ion-textarea type="text" placeholder="¿Le han intervenido quirúrgicamente en alguna ocasión? En caso afirmativo, Especifique las intervenciones y la fecha aproximada:" [(ngModel)]="surgeries"></ion-textarea>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>¿Sufre alguna Patologia?</ion-label>\n\n      <ion-textarea type="text" placeholder="¿Sufre alguna Patologia? En caso Afirmativo, Especifique a cuál o cuáles:" [(ngModel)]="pathology"></ion-textarea>\n\n    </ion-item>\n\n    <h3 text-center>Consulta actual</h3>\n\n  <ion-item>\n\n    <ion-label stacked>Edad</ion-label>\n\n    <ion-input type="number" [(ngModel)]="age"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Peso en Kg</ion-label>\n\n    <ion-input type="number" [(ngModel)]="weight"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Estatura en cm</ion-label>\n\n    <ion-input type="number" [(ngModel)]="height"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Motivo de consulta</ion-label>\n\n    <ion-textarea type="text"  [(ngModel)]="cons"></ion-textarea>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Sintomas</ion-label>\n\n    <ion-textarea type="text"  [(ngModel)]="symptom"></ion-textarea>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>¿Ha tenido temperatura en los ultimos días?</ion-label>\n\n    <ion-textarea type="text" placeholder="¿Ha tenido temperatura en los ultimos días? En caso afirmativo, Especifique que días y la temperatura que alcanzó" [(ngModel)]="temperature"></ion-textarea>\n\n  </ion-item>\n\n  -->\n\n\n\n  </ion-list>\n\n  <button ion-button block (click)="done(name, lastname, gender)">Enviar</button>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\lucero\Documents\7 Sem\Pensamiento creativo\Med-AA\src\pages\reg-patient\reg-patient.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _e || Object])
    ], RegPatientPage);
    return RegPatientPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=reg-patient.js.map

/***/ }),

/***/ 148:
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
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/make-appointment/make-appointment.module": [
		451,
		2
	],
	"../pages/patient-db/patient-db.module": [
		452,
		1
	],
	"../pages/reg-patient/reg-patient.module": [
		453,
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
webpackAsyncContext.id = 191;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(245);
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
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\lucero\Documents\7 Sem\Pensamiento creativo\Med-AA\src\app\app.html"*/`<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>`/*ion-inline-end:"C:\Users\lucero\Documents\7 Sem\Pensamiento creativo\Med-AA\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\lucero\Documents\7 Sem\Pensamiento creativo\Med-AA\src\pages\list\list.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\lucero\Documents\7 Sem\Pensamiento creativo\Med-AA\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(308);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_patient_db_patient_db__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_make_appointment_make_appointment__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_reg_patient_reg_patient__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//import { PostService } from '../providers/post-service';





var firebaseConfig = {
    apiKey: "AIzaSyCUjR3N8ebWlDmZVdwhkMzxemk8TgEycis",
    authDomain: "med-aa.firebaseapp.com",
    databaseURL: "https://med-aa.firebaseio.com",
    projectId: "med-aa",
    storageBucket: "med-aa.appspot.com",
    messagingSenderId: "967899702360"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_patient_db_patient_db__["b" /* PatientDBPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_patient_db_patient_db__["a" /* ModalContentPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_make_appointment_make_appointment__["a" /* MakeAppointmentPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_reg_patient_reg_patient__["a" /* RegPatientPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/make-appointment/make-appointment.module#MakeAppointmentPageModule', name: 'MakeAppointmentPage', segment: 'make-appointment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/patient-db/patient-db.module#PatientDBPageModule', name: 'PatientDBPage', segment: 'patient-db', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reg-patient/reg-patient.module#RegPatientPageModule', name: 'RegPatientPage', segment: 'reg-patient', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_patient_db_patient_db__["b" /* PatientDBPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_patient_db_patient_db__["a" /* ModalContentPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_make_appointment_make_appointment__["a" /* MakeAppointmentPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_reg_patient_reg_patient__["a" /* RegPatientPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PatientDBPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Observable } from 'rxjs/Observable';
var PatientDBPage = (function () {
    function PatientDBPage(navCtrl, navParams, afDatabase, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDatabase = afDatabase;
        this.modalCtrl = modalCtrl;
        this.searchQuery = '';
        this.initializeData();
    }
    PatientDBPage.prototype.initializeData = function () {
        //this.patients = this.afDatabase.list('/patients').valueChanges();
        this.patients = [
            { id: 1, name: "Juan Perez", sex: "male", allegies: "milk" },
            { id: 2, name: "Jojo", sex: "male", allegies: "egg" },
            { id: 3, name: "Maria", sex: "female", allegies: "toast" },
        ];
    };
    PatientDBPage.prototype.viewPatient = function (patient) {
        console.log(patient);
        var modal = this.modalCtrl.create(ModalContentPage, { patient2go: patient });
        modal.present();
    };
    PatientDBPage.prototype.getPatients = function (ev) {
        // Reset items back to all of the items
        this.initializeData();
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.patients = this.patients.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    PatientDBPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-patient-db',template:/*ion-inline-start:"C:\Users\lucero\Documents\7 Sem\Pensamiento creativo\Med-AA\src\pages\patient-db\patient-db.html"*/`<!--\n\n  Generated template for the PatientDbPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>patientDB</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-searchbar (ionInput)="getPatients($event)"></ion-searchbar>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let patient of patients" (click)="viewPatient(patient)">\n\n      {{ patient.name }}\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\lucero\Documents\7 Sem\Pensamiento creativo\Med-AA\src\pages\patient-db\patient-db.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], PatientDBPage);
    return PatientDBPage;
}());

var ModalContentPage = (function () {
    function ModalContentPage(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.patient = this.params.get('patient2go');
    }
    ModalContentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalContentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Description\n    </ion-title>\n    <ion-buttons start>\n    <button ion-button (click)=\"dismiss()\">\n      <span ion-text color=\"primary\" showWhen=\"ios\">Cancel</span>\n      <ion-icon name=\"md-close\" showWhen=\"android, windows\"></ion-icon>\n    </button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n{{patient | json}}\n</ion-content>\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], ModalContentPage);
    return ModalContentPage;
}());

//# sourceMappingURL=patient-db.js.map

/***/ })

},[287]);
//# sourceMappingURL=main.js.map