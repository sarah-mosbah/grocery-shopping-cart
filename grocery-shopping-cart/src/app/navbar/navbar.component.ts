import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authSer: AuthService) { }

  ngOnInit(): void {
  }



  logOut(){
    this.authSer.AuthLogOut();
  }
}
