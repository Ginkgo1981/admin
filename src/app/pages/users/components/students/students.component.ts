import {Component} from '@angular/core';
import {StudentsService} from '../../../../services'

@Component({
  selector: 'students',
  templateUrl: './students.html'
})
export class StudentsComponent {
  peopleTableData:Array<any>;

  constructor(private _service: StudentsService) {
    _service.getStudents().then(res => {
          console.log("===== res %o", res)
          this.peopleTableData = res['data']
        }
    );
  }

}