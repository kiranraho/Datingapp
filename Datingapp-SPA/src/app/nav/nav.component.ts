import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_Services/Auth.service';
import { error } from '@angular/compiler/src/util';
import { AlertifyService } from '../_Services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
   model: any  = {};

  constructor(public authservices: AuthService , private alertify: AlertifyService) { }


  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

    // tslint:disable-next-line: typedef
    login()
    {
       this.authservices.login(this.model).subscribe(next => {

        this.alertify.Success('SuccessFully logged in');
       }, Error => {
       this.alertify.error('Failed to login');
       }
       );
    }

    // tslint:disable-next-line: typedef
    loggedin()
    {
      return this.authservices.loggedIn();
    }

    // tslint:disable-next-line: typedef
    logout()
    {
      localStorage.removeItem('token');
      this.alertify.message('User sucessfully Logged out');
    }
}
