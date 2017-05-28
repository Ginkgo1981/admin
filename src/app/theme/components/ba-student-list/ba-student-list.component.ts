import {Component, ViewChild, Input, Output, ElementRef, EventEmitter,OnInit, ChangeDetectionStrategy} from '@angular/core';
import {UsersService} from "../../../services/users.service";
import {DatatableComponent} from '@swimlane/ngx-datatable'
import {Student} from "../../../models/student";
@Component({
  selector: 'ba-students-list',
  templateUrl: './ba-student-list.component.html',
  styleUrls: ['./ba-student-list.component.scss']
})
export class BaStudentList implements OnInit {

  @ViewChild(DatatableComponent) table:DatatableComponent;

  students:Array<Student> = [];
  count:number = 0;
  offset:number = 0;
  @Input() limit:number = 30;
  @Input() university_dsin:String;
  @Input() columns:Array<string> = ['id', 'name', 'nickname', 'province', 'city', 'edit', 'cell', 'detail', 'choose'];
  @Output() public onChanged = new EventEmitter();
  @Input() selected = [];


  constructor(private _service:UsersService) {
  }

  ngOnInit():void {
    this.count = 10;
    console.debug("[ba-student-list] ngOnInit university_dsin:%o, selected: %o, columns: %o", this.university_dsin, this.selected, this.columns);
    this.page(this.offset, this.limit)
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
          this.students = students
          this.students.forEach(student => {
            this.selected.forEach(s => {
              if (s.dsin == student.dsin) {
                student.selected = true
              }
            })
            return student;
          });
          console.debug("[ba-student-list] page this.students: %o", this.students)
        }
    )
  }

  onPage(event) {
    console.debug("[ba-student-list] onPage event: %o", event);
    this.page(event.offset, event.limit);
  }

  onActivate(e) {
    console.debug("[ba-student-list] onActivate e: %o", e);
    let student = e.row;
    let column = e.column;
    this.onChanged.emit({
      action: 'selected',
      data: student
    })
  }

  //onSelect(e) {
  //  console.debug("[ba-student-list] e: %o, this.selected: %o",e , this.selected);
  //  this.onChanged.emit({
  //    scope: 'ba-student-list',
  //    action: 'selected',
  //    data: e.selected
  //  })
  //}

}