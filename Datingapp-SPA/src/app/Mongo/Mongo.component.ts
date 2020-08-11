import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Mongo',
  templateUrl: './Mongo.component.html',
  styleUrls: ['./Mongo.component.css']
})
export class MongoComponent implements OnInit {
 mongo: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getMongo();
  }

getMongo()
{
 this.http.get('http://localhost:4220/api/Books').subscribe(Response => {
  this.mongo = Response;
    }, Error => {console.log(Error);
    });
   }

}
