import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform, ViewController} from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { FirebaseProvider } from '../../providers/firebase';

@IonicPage()
@Component({
  selector: 'page-patient-db',
  templateUrl: 'patient-db.html',
})
export class PatientDBPage {
  patients: FirebaseListObservable<any[]>;
  filterI: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public afDatabase: AngularFireDatabase, public modalCtrl: ModalController,
    public firebaseProvider: FirebaseProvider) {
      this.initializeData();
  }

  initializeData(){
    this.patients = this.firebaseProvider.getPatients();
    this.patients.subscribe((item) => {
      this.filterI = [];
      item.forEach(k => {
          this.filterI.push(k);
      })
    })
  }

  viewPatient(patient){
    let modal = this.modalCtrl.create(ModalContentPage, {patient2go: patient})
    modal.present();
  }

  getPatients(ev) {
      this.initializeData();
      var val = ev.target.value;
      if (val && val.trim() != '') {
        this.patients.subscribe((item) => {
          this.filterI = [];
          item.forEach(k => {
            if( k.name.toLowerCase().indexOf(val.toLowerCase()) > -1) {
                    this.filterI.push(k);
                }
          })
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
