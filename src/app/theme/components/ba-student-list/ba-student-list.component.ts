import {Component, ViewChild, Input, Output, ElementRef, EventEmitter,OnInit} from '@angular/core';
import {UsersService} from "../../../services/users.service";
import {DatatableComponent} from '@swimlane/ngx-datatable'
import {Student} from "../../../models/student";
@Component({
  selector: 'ba-students-list',
  templateUrl: './ba-student-list.html'
})
export class BaStudentList implements OnInit{

  @ViewChild(DatatableComponent) table: DatatableComponent;

  students:Array<Student> = [];
  count: number = 0;
  offset: number = 0;
  @Input() limit: number;
  selected = [];

  constructor(private _service: UsersService) {
  }

  ngOnInit():void {
    this.count = 10;
    this.page(this.offset, this.limit)
  }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }

  page(offset=0, limit=10) {
    this._service.get_student_list().then(res => {
          let results = res.students;
          console.log("===results %o", results);
          this.count = 1000;
          const start = offset * limit;
          const end = start + limit;
          const students = [...this.students];
          for (let i = start; i < end; i++) {
            students[i] = results[i];
          }
          this.students = students;
          console.log("===students %o", this.students);
        }
    )
    console.log("====offset: %o, limit: %o", offset, limit)
  }

  onPage(event) {
    console.log('Page Event', event);
    this.page(event.offset, event.limit);
  }




}