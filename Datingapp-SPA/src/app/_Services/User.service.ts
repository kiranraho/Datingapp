import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_Models/User';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
BaseUrl = environment.apiUrl;
constructor(private http: HttpClient) { }

  getUsers(): Observable<any>
  {
    return this.http.get<User[]>(this.BaseUrl + 'Users/');

  }
  getUser(id: number | string): Observable<any>{
    return this.http.get<User>(this.BaseUrl + 'Users/' + id);
  }
}
