import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_Models/User';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {
  @Input() user: User;
  constructor() { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

}
