import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PatientDBPage } from '../pages/patient-db/patient-db'
import { MakeAppointmentPage } from '../pages/make-appointment/make-appointment'
import { RegPatientPage } from '../pages/reg-patient/reg-patient'
import { ModalContentPage } from '../pages/patient-db/patient-db'
//import { PostService } from '../providers/post-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseProvider } from './../providers/firebase';

export const firebaseConfig = {
    apiKey: "AIzaSyCUjR3N8ebWlDmZVdwhkMzxemk8TgEycis",
    authDomain: "med-aa.firebaseapp.com",
    databaseURL: "https://med-aa.firebaseio.com",
    projectId: "med-aa",
    storageBucket: "med-aa.appspot.com",
    messagingSenderId: "967899702360"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PatientDBPage,
    ModalContentPage,
    MakeAppointmentPage,
    RegPatientPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PatientDBPage,
    ModalContentPage,
    MakeAppointmentPage,
    RegPatientPage
  ],
  providers: [
    FirebaseProvider,
    AngularFireDatabase,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
