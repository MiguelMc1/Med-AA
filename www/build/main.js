webpackJsonp([3],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient_db_patient_db__ = __webpack_require__(77);
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Miguel Mtz\Documents\UANL\7Sem\PC\l\Med-AA\src\pages\home\home.html"*/`<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title center text-center>Hospital</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="card-background-page">\n\n  <ion-card (click)="changePage(\'regPatient\')">\n\n    <img src="assets/imgs/NuevoPaciente.jpg"/>\n\n    <div class="card-title">Paciente Nuevo</div>\n\n    <div class="card-subtitle">41 Listings</div>\n\n  </ion-card>\n\n\n\n  <ion-card (click)="changePage(\'patientDB\')">\n\n    <img src="assets/imgs/pacientes.jpg"/>\n\n    <div class="card-title">Pacientes</div>\n\n    <div class="card-subtitle">64 Listings</div>\n\n  </ion-card>\n\n\n\n  <ion-card (click)="changePage(\'makeAppointment\')">\n\n    <img src="assets/imgs/PDB.jpg"/>\n\n    <div class="card-title">Agendar citas</div>\n\n    <div class="card-subtitle">72 Listings</div>\n\n  </ion-card>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Miguel Mtz\Documents\UANL\7Sem\PC\l\Med-AA\src\pages\home\home.html"*/
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
            selector: 'page-make-appointment',template:/*ion-inline-start:"C:\Users\Miguel Mtz\Documents\UANL\7Sem\PC\l\Med-AA\src\pages\make-appointment\make-appointment.html"*/`<!--\n\n  Generated template for the MakeAppointmentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Agendar Cita</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <iframe id="bookingCalendar" src="https://med-aa.appointlet.com/s/cita-medica" style="width: 100%; max-width: 100%; height: 650px; border: 0; padding: 0; margin: 0;"></iframe>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Miguel Mtz\Documents\UANL\7Sem\PC\l\Med-AA\src\pages\make-appointment\make-appointment.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(104);
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
    RegPatientPage.prototype.done = function (name, lastname, gender, birth, insurance, address, cp, edo, tel, cel, email, blood, Mallergic, Oallergic, medicament, surgeries, pathology, age, weight, height, cons, symptom, temperature) {
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
        this.af.list('/patients').push({ name: name, lastname: lastname, gender: gender, birth: birth, insurance: insurance, address: address, cp: cp, edo: edo, tel: tel, cel: cel, email: email, blood: blood, Mallergic: Mallergic, Oallergic: Oallergic, medicament: medicament, surgeries: surgeries, pathology: pathology, age: age, weight: weight, height: height, cons: cons, symptom: symptom, temperature: temperature })
            .then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        });
        alert.present();
    };
    RegPatientPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reg-patient',template:/*ion-inline-start:"C:\Users\Miguel Mtz\Documents\UANL\7Sem\PC\l\Med-AA\src\pages\reg-patient\reg-patient.html"*/`<!--\n\n  Generated template for the RegPatientPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Registro de Pacientes</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<ion-list>\n\n  <h3 text-center>Datos Personales</h3>\n\n  <ion-item>\n\n    <ion-label stacked>Nombre(s)</ion-label>\n\n    <ion-input type="text" [(ngModel)]="name"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Apellidos</ion-label>\n\n    <ion-input type="text" [(ngModel)]="lastname"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Genero (Femenino o Masculino)</ion-label>\n\n    <ion-input type="text" [(ngModel)]="gender"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Fecha de nacimiento</ion-label>\n\n    <ion-datetime displayFormat="DD MMM YYYY"  [(ngModel)]="birth"></ion-datetime>\n\n    <!--<ion-input type="text"  [(ngModel)]="birth"></ion-input>-->\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>No. de Seguro Médico (Si no tiene favor de ingresar NA)</ion-label>\n\n    <ion-input type="text" [(ngModel)]="insurance"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Dirección</ion-label>\n\n    <ion-textarea type="text" [(ngModel)]="address"></ion-textarea>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Código Postal</ion-label>\n\n    <ion-input type="text" [(ngModel)]="cp"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Municipio-Estado</ion-label>\n\n    <ion-input type="text" [(ngModel)]="edo"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Teléfono</ion-label>\n\n    <ion-input type="tel" [(ngModel)]="tel"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Celular</ion-label>\n\n    <ion-input type="tel" [(ngModel)]="cel"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>E-Mail</ion-label>\n\n    <ion-input type="text" [(ngModel)]="email"></ion-input>\n\n  </ion-item>\n\n    <h3 text-center>Datos Médicos</h3>\n\n    <ion-item>\n\n      <ion-label stacked>Tipo de sangre</ion-label>\n\n      <ion-input type="text" [(ngModel)]="blood"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>¿Eres alergico a algun medicamento?</ion-label>\n\n      <ion-textarea type="text"  rows="4" placeholder="¿Eres alergico a algun medicamento? En caso afirmativo, Especifique a cuál o cuáles:" [(ngModel)]="Mallergic"></ion-textarea>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>¿Tiene alguna otra alergia?</ion-label>\n\n      <ion-textarea type="text" rows="4" placeholder="¿Tiene alguna otra alergia? En caso afirmativo, Especifique a cuál o cuáles:" [(ngModel)]="Oallergic"></ion-textarea>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>¿Toma algún medicamento en la actualidad?</ion-label>\n\n      <ion-textarea type="text" rows="4" placeholder="¿Toma algún medicamento en la actualidad? En caso afirmativo, Especifique a cuál o cuáles:" [(ngModel)]="medicament"></ion-textarea>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>¿Le han intervenido quirúrgicamente?</ion-label>\n\n      <ion-textarea type="text" rows="4" placeholder="¿Le han intervenido quirúrgicamente en alguna ocasión? En caso afirmativo, Especifique las intervenciones y la fecha aproximada:" [(ngModel)]="surgeries"></ion-textarea>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>¿Sufre alguna Patologia?</ion-label>\n\n      <ion-textarea type="text" rows="4" placeholder="¿Sufre alguna Patologia? En caso Afirmativo, Especifique a cuál o cuáles:" [(ngModel)]="pathology"></ion-textarea>\n\n    </ion-item>\n\n    <h3 text-center>Consulta actual</h3>\n\n  <ion-item>\n\n    <ion-label stacked>Edad</ion-label>\n\n    <ion-input type="number" [(ngModel)]="age"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Peso en Kg</ion-label>\n\n    <ion-input type="number" [(ngModel)]="weight"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Estatura en cm</ion-label>\n\n    <ion-input type="number" [(ngModel)]="height"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Motivo de consulta</ion-label>\n\n    <ion-textarea type="text" rows="4" [(ngModel)]="cons"></ion-textarea>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Sintomas</ion-label>\n\n    <ion-textarea type="text" rows="4" [(ngModel)]="symptom"></ion-textarea>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>¿Ha tenido temperatura en los ultimos días?</ion-label>\n\n    <ion-textarea type="text" rows="4" placeholder="¿Ha tenido temperatura en los ultimos días? En caso afirmativo, Especifique que días y la temperatura que alcanzó" [(ngModel)]="temperature"></ion-textarea>\n\n  </ion-item>\n\n\n\n\n\n  </ion-list>\n\n  <button ion-button block (click)="done(name, lastname, gender, birth, insurance, address, cp, edo, tel, cel, email, blood, Mallergic, Oallergic, medicament, surgeries, pathology, age, weight, height, cons, symptom, temperature)">Enviar</button>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Miguel Mtz\Documents\UANL\7Sem\PC\l\Med-AA\src\pages\reg-patient\reg-patient.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], RegPatientPage);
    return RegPatientPage;
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
		453,
		2
	],
	"../pages/patient-db/patient-db.module": [
		454,
		1
	],
	"../pages/reg-patient/reg-patient.module": [
		455,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(246);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Miguel Mtz\Documents\UANL\7Sem\PC\l\Med-AA\src\app\app.html"*/`<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>`/*ion-inline-end:"C:\Users\Miguel Mtz\Documents\UANL\7Sem\PC\l\Med-AA\src\app\app.html"*/
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirebaseProvider = (function () {
    function FirebaseProvider(afd) {
        this.afd = afd;
    }
    FirebaseProvider.prototype.getPatients = function () {
        return this.afd.list('/patients').valueChanges();
    };
    FirebaseProvider.prototype.getPatientsNames = function () {
        return this.afd.list('/patients').valueChanges();
    };
    FirebaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FirebaseProvider);
    return FirebaseProvider;
}());

//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 246:
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
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Miguel Mtz\Documents\UANL\7Sem\PC\l\Med-AA\src\pages\list\list.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Miguel Mtz\Documents\UANL\7Sem\PC\l\Med-AA\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(309);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_patient_db_patient_db__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_make_appointment_make_appointment__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_reg_patient_reg_patient__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_firebase__ = __webpack_require__(245);
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
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* HttpModule */]
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
                __WEBPACK_IMPORTED_MODULE_15__providers_firebase__["a" /* FirebaseProvider */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__["a" /* AngularFireDatabase */],
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

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PatientDBPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase__ = __webpack_require__(245);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PatientDBPage = (function () {
    function PatientDBPage(navCtrl, navParams, afDatabase, modalCtrl, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDatabase = afDatabase;
        this.modalCtrl = modalCtrl;
        this.firebaseProvider = firebaseProvider;
        this.initializeData();
    }
    PatientDBPage.prototype.initializeData = function () {
        var _this = this;
        this.patients = this.firebaseProvider.getPatients();
        this.patients.subscribe(function (item) {
            _this.filterI = [];
            item.forEach(function (k) {
                _this.filterI.push(k);
            });
        });
    };
    PatientDBPage.prototype.viewPatient = function (patient) {
        var modal = this.modalCtrl.create(ModalContentPage, { patient2go: patient });
        modal.present();
    };
    PatientDBPage.prototype.getPatients = function (ev) {
        var _this = this;
        this.initializeData();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.patients.subscribe(function (item) {
                _this.filterI = [];
                item.forEach(function (k) {
                    if (k.name.toLowerCase().indexOf(val.toLowerCase()) > -1) {
                        _this.filterI.push(k);
                    }
                });
            });
        }
    };
    PatientDBPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-patient-db',template:/*ion-inline-start:"C:\Users\Miguel Mtz\Documents\UANL\7Sem\PC\l\Med-AA\src\pages\patient-db\patient-db.html"*/`<!--\n\n  Generated template for the PatientDbPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>patientDB</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-searchbar (ionInput)="getPatients($event)"></ion-searchbar>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let patient of filterI" (click)="viewPatient(patient)">\n\n      {{ patient.name }}\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Miguel Mtz\Documents\UANL\7Sem\PC\l\Med-AA\src\pages\patient-db\patient-db.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_firebase__["a" /* FirebaseProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_firebase__["a" /* FirebaseProvider */]) === "function" && _e || Object])
    ], PatientDBPage);
    return PatientDBPage;
    var _a, _b, _c, _d, _e;
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]) === "function" && _c || Object])
    ], ModalContentPage);
    return ModalContentPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=patient-db.js.map

/***/ })

},[288]);
//# sourceMappingURL=main.js.map