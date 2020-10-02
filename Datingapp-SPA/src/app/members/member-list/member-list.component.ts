import { Component, OnInit } from '@angular/core';
import { User } from '../../_Models/User';
import { UserService } from '../../_Services/User.service';
import { AlertifyService } from '../../_Services/alertify.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
Users: User[];
  constructor(private userService: UserService , private alertifyService: AlertifyService ,private route: ActivatedRoute ) { }

  // tslint:disable-next-line: typedef
  loadUsers()
  {
    this.userService.getUsers().subscribe((Users: User[]) =>
      {
        this.Users = Users;
      }, error =>
      {
        this.alertifyService.error(error);
      }
    );
  }
  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.route.data.subscribe(data =>
      {
        // tslint:disable-next-line: no-string-literal
        this.Users = data['Users'];
      });
  }

}
