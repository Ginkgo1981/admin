import {Component} from '@angular/core';
import {UsersService} from '../../../../services'
import { User } from '../../../../models'

@Component({
  selector: 'students',
  templateUrl: './students.html'
})
export class StudentsComponent {
  students:Array<User>;

  constructor(private _service: UsersService) {
    _service.getUsers('Student').then(res => {
          console.log("===== res %o", res)
          this.students = res['data']
        }
    );

  }

}