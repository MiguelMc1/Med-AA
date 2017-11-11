import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegPatientPage } from './reg-patient';

@NgModule({
  declarations: [
    RegPatientPage,
  ],
  imports: [
    IonicPageModule.forChild(RegPatientPage),
  ],
})
export class RegPatientPageModule {}
