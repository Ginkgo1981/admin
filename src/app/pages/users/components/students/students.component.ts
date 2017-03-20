import {Component} from '@angular/core';
import {UsersService} from '../../../../services'
import { User } from '../../../../models'

@Component({
  selector: 'students',
  templateUrl: './students.html'
})
export class StudentsComponent {

  constructor(private _service: UsersService) {}

}