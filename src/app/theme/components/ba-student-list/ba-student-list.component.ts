import {Component, ViewChild, Input, Output, ElementRef, EventEmitter,OnInit} from '@angular/core';
import {UsersService} from "../../../services/users.service";
import {DatatableComponent} from '@swimlane/ngx-datatable'
import {Student} from "../../../models/student";
@Component({
  selector: 'ba-students-list',
  templateUrl: './ba-student-list.component.html',
  styleUrls: ['./ba-student-list.component.scss'],
})
export class BaStudentList implements OnInit {

  @ViewChild(DatatableComponent) table:DatatableComponent;

  students:Array<Student> = [];
  count:number = 0;
  offset:number = 0;
  @Input() limit:number;
  selected = [];

  constructor(private _service:UsersService) {
  }

  ngOnInit():void {
    this.count = 10;
    this.page(this.offset, this.limit)
  }

  onSelect({ selected }) {
    console.debug("[ba-student-list] selected %o, this.selected: %o", selected, this.selected);
  }

  onActivate(event) {
    console.debug("[ba-student-list] onActivate event: %o", event);
  }

  page(offset = 0, limit = 10) {
    console.debug("[ba-student-list] page offset: %o, limit: %o", offset, limit);
    this._service.get_student_list().then(res => {
          console.debug("[ba-student-list] get_student_list res:", res);
          let results = res.students;
          this.count = 1000;
          const start = offset * limit;
          const end = start + limit;
          const students = [...this.students];
          for (let i = start; i < end; i++) {
            students[i] = results[i];
          }
          this.students = students;
        }
    )
  }

  onPage(event) {
    console.debug("[ba-student-list] onPage event: %o", event);
    this.page(event.offset, event.limit);
  }


}