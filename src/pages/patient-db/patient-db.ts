import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform, ViewController} from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
//import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-patient-db',
  templateUrl: 'patient-db.html',
})
export class PatientDBPage {
  searchQuery: string = '';
  patients: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public afDatabase: AngularFireDatabase, public modalCtrl: ModalController) {
      this.initializeData();
  }

  initializeData(){
    //this.patients = this.afDatabase.list('/patients').valueChanges();
    this.patients = [
      {id:1, name:"Juan Perez", sex:"male", allegies:"milk"},
      {id:2, name:"Jojo", sex:"male", allegies:"egg"},
      {id:3, name:"Maria", sex:"female", allegies:"toast"},
    ]
  }

  viewPatient(patient){
    console.log(patient);
    let modal = this.modalCtrl.create(ModalContentPage, {patient2go: patient})
    modal.present();
  }

  getPatients(ev) {
    // Reset items back to all of the items
    this.initializeData();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.patients = this.patients.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}

@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Description
    </ion-title>
    <ion-buttons start>
    <button ion-button (click)="dismiss()">
      <span ion-text color="primary" showWhen="ios">Cancel</span>
      <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
    </button>
  </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
{{patient | json}}
</ion-content>
`
})
export class ModalContentPage {
  patient;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController) {
      this.patient = this.params.get('patient2go');
}

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
