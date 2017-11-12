import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database";
//import { PostService } from '../../providers/post-service';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-reg-patient',
  templateUrl: 'reg-patient.html'
})
export class RegPatientPage {

  name: string;
  lastname: string;
  gender: string;
  birth: string;
  insurance: string;
  address: string;
  cp: string;
  edo: string;
  tel: string;
  cel: string;
  email: string;
  blood: string;
  Mallergic: string;
  Oallergic: string;
  medicament: string;
  surgeries: string;
  pathology: string;
  age: string;
  weight: string;
  height: string;
  cons: string;
  symptom: string;
  temperature: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCrtl: LoadingController,
    public alertCtrl: AlertController,
    public af: AngularFireDatabase){}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegPatientPage');
  }

  done(name: string, lastname: string, gender: string, birth: string, insurance: string, address: string, cp: string, edo: string, tel: string, cel: string, email: string, blood: string, Mallergic: string, Oallergic: string, medicament: string, surgeries: string,
    pathology: string, age: string, weight: string, height: string, cons: string, symptom: string, temperature: string) {
    let alert = this.alertCtrl.create({
      title: 'Registro Completado',
        buttons: [{
        text: "OK",
        handler: data => {
          this.navCtrl.push(HomePage);
        }
      }]
    });
    let loading = this.loadingCrtl.create({
      dismissOnPageChange: true,
    });
    loading.present();
    setTimeout(() => {
    loading.dismiss();
    }, 1000);
    this.af.list('/patients').push({name, lastname, gender, birth, insurance, address, cp, edo, tel, cel, email, blood, Mallergic, Oallergic, medicament, surgeries, pathology, age, weight, height, cons, symptom, temperature})
    .then(() => {
      this.navCtrl.setRoot(HomePage);
    });
    alert.present();
  }

}
