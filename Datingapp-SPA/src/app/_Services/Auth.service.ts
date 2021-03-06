import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 baseUrl = 'http://localhost:5001/api/Auth/';
 jwtHelper = new JwtHelperService() ;
 decodedToken: any;
constructor( private http: HttpClient ) { }

// tslint:disable-next-line: typedef
login(model: any)
{
  return this.http.post(this.baseUrl + 'Login', model).pipe(
  map((response: any) => {
  const user = response;
 // tslint:disable-next-line: align
 if (user) {
   localStorage.setItem('token', user.token);
   this.decodedToken = this.jwtHelper.decodeToken(user.token);
   console.log(this.decodedToken);
  }
})
);
}
// tslint:disable-next-line: typedef
register(model: any)
{
return this.http.post(this.baseUrl + 'Register' , model);
}
// tslint:disable-next-line: typedef
loggedIn()
{
const token = localStorage.getItem('token');
return !this.jwtHelper.isTokenExpired(token);
}
}
