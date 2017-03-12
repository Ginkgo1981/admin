import {Component} from '@angular/core';

@Component({
  selector: 'students',
  styleUrls: ['./students.scss'],
  //templateUrl: './students.html'
  template: `<router-outlet></router-outlet>`
})
export class Students {
  constructor() {}
}