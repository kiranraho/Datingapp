import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_Services/Auth.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
   model: any  = {};

  constructor(private authservices: AuthService) { }


  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

    // tslint:disable-next-line: typedef
    login()
    {
       this.authservices.login(this.model).subscribe(next => {

        console.log('Login Sucessfully');
       }, Error => {
        console.log('Failed to login');
       }
       );
    }

    // tslint:disable-next-line: typedef
    loggedin()
    {
      const token = localStorage.getItem('token');
      return !! token;
    }

    // tslint:disable-next-line: typedef
    logout()
    {
      localStorage.removeItem('token');
      console.log('User sucessfully Logged out');
    }
}
