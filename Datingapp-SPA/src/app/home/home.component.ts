import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  regestermodel = false;

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }
  // tslint:disable-next-line: typedef
  regesterToggel()
  {
    this.regestermodel = true;
  }

  // tslint:disable-next-line: typedef
 

  // tslint:disable-next-line: typedef
  cancleRegisterMode(regestermodel: boolean)
  {
    this.regestermodel = regestermodel;

  }

}
