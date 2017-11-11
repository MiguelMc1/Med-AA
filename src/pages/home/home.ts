import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PatientDBPage } from '../patient-db/patient-db'
import { MakeAppointmentPage } from '../make-appointment/make-appointment'
import { RegPatientPage } from '../reg-patient/reg-patient'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  changePage(link){
    if(link == "patientDB"){
      this.navCtrl.push(PatientDBPage);
    }
    else if (link == "regPatient"){
      this.navCtrl.push(RegPatientPage);
    }
    else if (link == "makeAppointment"){
      this.navCtrl.push(MakeAppointmentPage);
    }
  }


}
