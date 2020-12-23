import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  appUser$: User;

  constructor(private authSer: AuthService) {
    
    authSer.appUser$?.subscribe(user=> this.appUser$=user);
   }

  ngOnInit(): void {
  }



  logOut(){
    this.authSer.AuthLogOut();
  }
}
