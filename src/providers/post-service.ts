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

  newPatient(name, lastname, gender){
    var postData = {
      name: name,
      lastname: lastname,
      gender: gender
    };

    var newPostKey = firebase.database().ref().child('patients').push().key;
    var updates = {};
    updates['/patients/' + newPostKey] = postData;
    return firebase.database().ref().update(updates);
  }

}
