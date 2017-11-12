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

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCrtl: LoadingController,
    public alertCtrl: AlertController,
    public af: AngularFireDatabase){}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegPatientPage');
  }

  done(name: string, lastname: string, gender: string) {
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
    this.af.list('/patients').push({name, lastname, gender})
    .then(() => {
      this.navCtrl.setRoot(HomePage);
    });
    alert.present();
  }

}
