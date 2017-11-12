import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) { }

  getPatients() {
    return this.afd.list('/patients').valueChanges();
  }
}
