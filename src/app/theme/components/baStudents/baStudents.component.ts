import {Component, ViewChild, Input, Output, ElementRef, EventEmitter,OnInit} from '@angular/core';
import {UsersService} from "../../../services/users.service";
import {DatatableComponent} from '@swimlane/ngx-datatable'
@Component({
  selector: 'ba-students-list',
  templateUrl: './baStudents.html'
})
export class BaStudents implements OnInit{

  @ViewChild(DatatableComponent) table: DatatableComponent;

  rows = [];
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
    this._service.getUsers('Student').then(res => {
          let results = res.data
          this.count = 1000;
          const start = offset * limit;
          const end = start + limit;
          const rows = [...this.rows];
          for (let i = start; i < end; i++) {
            rows[i] = results[i];
          }
          this.rows = rows;
        }
    )
    console.log("====offset: %o, limit: %o", offset, limit)
  }

  onPage(event) {
    console.log('Page Event', event);
    this.page(event.offset, event.limit);
  }




}