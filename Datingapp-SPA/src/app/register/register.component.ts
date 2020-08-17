import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_Services/Auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelregistermode = new EventEmitter();
model: any = {};


  constructor(private authservice: AuthService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  // tslint:disable-next-line: typedef
  register()
  {
    this.authservice.register(this.model).subscribe(() =>{
console.log('registration sucessfull');

    }, Error => {

      console.log(Error);
    });
  }

  // tslint:disable-next-line: typedef
  cancel()
  {
   this.cancelregistermode.emit(false);
    // tslint:disable-next-line: align
    console.log('cancelled sucessfilly');
  }
}
