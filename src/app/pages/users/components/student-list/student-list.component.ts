import {Component} from '@angular/core';
import {UsersService} from '../../../../services'
import { User } from '../../../../models'

@Component({
  selector: 'students',
  templateUrl: './student-list.html'
})
export class StudentListComponent {

  constructor(private _service: UsersService) {}

}