import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';


/**
 * Generated class for the MakeAppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-make-appointment',
  templateUrl: 'make-appointment.html',
})
export class MakeAppointmentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MakeAppointmentPage');
  }

  changePage(Home){
    this.navCtrl.push(MyApp, {
    });
  }

}
