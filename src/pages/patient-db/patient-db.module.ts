import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatientDBPage } from './patient-db';

@NgModule({
  declarations: [
    PatientDBPage,
  ],
  imports: [
    IonicPageModule.forChild(PatientDBPage),
  ],
})
export class PatientDBPageModule {}
