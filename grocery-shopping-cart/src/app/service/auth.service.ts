import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:Observable<firebase.default.User>
  constructor(private firebaseAuth: AngularFireAuth,
     private route:ActivatedRoute, 
     private router:Router,
     private userSer: UserService) {
    this.user=  firebaseAuth.authState;
  }

  GoogleAuth() {
  
    return this.AuthLogin(new firebase.default.auth.GoogleAuthProvider());
  }  
 
  AuthLogin(provider) {
    let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl');
    return this.firebaseAuth.signInWithPopup(provider).then((u)=>{
        this.userSer.save(u.user);
        returnUrl ? this.router.navigateByUrl(returnUrl) :  this.router.navigateByUrl('/');
    }).catch(err=>{
      console.log(err);
    } );
  }


  get currentUser(){
    return this.user;    
  }


  AuthLogOut(){
    this.firebaseAuth.signOut();
    this.router.navigateByUrl('/login');
  }
}
