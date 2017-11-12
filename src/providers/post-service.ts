import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

/*
  Generated class for the PostService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PostService {

  constructor(public http: Http) {
    console.log('Hello PostService Provider');
  }

  newPatient(name, lastname,gender, birth, insurance, address, cp, city, tel, cel, email, blood, Mallergic, Oallergic, medicament, surgeries, pathology, age, weight, height, cons, symptom, temperature){
    var postData = {
      name: name,
      lastname: lastname,
      gender: gender,
      birth: birth,
      insurance: insurance,
      address: address,
      cp: cp,
      city: city,
      tel: tel,
      cel: cel,
      email: email,
      blood: blood,
      Mallergic: Mallergic,
      Oallergic: Oallergic,
      medicament: medicament,
      surgeries: surgeries,
      pathology: pathology,
      age: age,
      weight: weight,
      height: height,
      cons: cons,
      symptom: symptom,
      temperature: temperature,
    };

    var newPostKey = firebase.database().ref().child('patients').push().key;
    var updates = {};
    updates['/patients/' + newPostKey] = postData;
    console.log(newPostKey);
    return firebase.database().ref().update(updates);
  }

}
