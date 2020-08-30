import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_Services/Auth.service';
import { AlertifyService } from '../_Services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelregistermode = new EventEmitter();
model: any = {};


  constructor(private authservice: AuthService , private alertify: AlertifyService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  // tslint:disable-next-line: typedef
  register()
  {
    this.authservice.register(this.model).subscribe(() => {
 this.alertify.Success('registration sucessfull');

    }, Error => {

      this.alertify.error(Error);
    });
  }

  // tslint:disable-next-line: typedef
  cancel()
  {
   this.cancelregistermode.emit(false);
  }
}
