import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MakeAppointmentPage } from './make-appointment';

@NgModule({
  declarations: [
    MakeAppointmentPage,
  ],
  imports: [
    IonicPageModule.forChild(MakeAppointmentPage),
  ],
})
export class MakeAppointmentPageModule {}
