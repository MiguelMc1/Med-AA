import { Component, NgZone } from '@angular/core';
import { MyApp } from '../../app/app.component';
import { NavController, NavParams, ModalController, ViewController, LoadingController, AlertController, IonicPage } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseApp } from 'angularfire2';
import { FileChooser, FilePath, File } from 'ionic-native';
import { PostService } from '../../providers/post-service';

@IonicPage()
@Component({
  selector: 'page-reg-patient',
  templateUrl: 'reg-patient.html',
    providers: [PostService]
})
export class RegPatientPage {
  regPatient: FirebaseListObservable<any>;
  pages: Array<{title: string, component: any}>;
  nativepath: any;
  firestore = firebase.storage();

  private name: any;
  private lastname: any;
  private gender: any;
  private birth: any;
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
  private temperature: any;
  private registroID: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private loadingCrtl: LoadingController,
    private viewCtrl: ViewController,
    private postService: PostService,
    private alertCtrl: AlertController,
    public angFire: AngularFire,
    public zone: NgZone){}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegPatientPage');
  }

  done(registro) {
    let alert = this.alertCtrl.create({
      title: 'Registro Completado',
        buttons: [{
        text: "OK",
        handler: data => {
          this.navCtrl.push(MyApp, {
          });
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
    this.postService.newPatient(this.name, this.lastname, this.gender, this.birth, this.insurance, this.address, this.cp, this.city, this.tel, this.cel, this.email, this.blood, this.Mallergic, this.Oallergic, this.medicament, this.surgeries, this.pathology, this.age,
      this.weight, this.height, this.cons, this.symptom, this.temperature)
    .then(() => {
      this.navCtrl.setRoot(MyApp);
    });
    alert.present();
  }

}
