import {Component} from '@angular/core';
import {StudentsService} from '../../../../services'
import { Student } from '../../../../models'

@Component({
  selector: 'students',
  templateUrl: './students.html'
})
export class StudentsComponent {
  students:Array<Student>;

  constructor(private _service: StudentsService) {
    _service.getStudents().then(res => {
          console.log("===== res %o", res)
          this.students = res['data']
        }
    );
  }

}