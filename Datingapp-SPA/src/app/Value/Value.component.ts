import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-Value',
  templateUrl: './Value.component.html',
  styleUrls: ['./Value.component.css']
})
export class ValueComponent implements OnInit {

  values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {

  this.getValues();
  }

  getValues()
  {
this.http.get('http://localhost:5001/api/values').subscribe(Response => {
  this.values = Response;
}, Error => {console.log(Error);
});

  }
}
