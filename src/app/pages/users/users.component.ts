import {Component} from '@angular/core';

@Component({
  selector: 'users',
  styleUrls: ['./users.scss'],
  //templateUrl: './users.html'
  template: `<router-outlet></router-outlet>`
})
export class UsersComponent {
  constructor() {}
}