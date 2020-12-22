import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:Observable<firebase.default.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
   this.user= firebaseAuth.authState;
  }

  GoogleAuth() {
    return this.AuthLogin(new firebase.default.auth.GoogleAuthProvider());
  }  
 
  AuthLogin(provider) {
    return this.firebaseAuth.signInWithPopup(provider)
    .then((result) => {
        console.log('You have been successfully logged in!', result)
    }).catch((error) => {
        console.log(error)
    })
  }
}