import { Component, OnInit, Input,ViewChild} from '@angular/core'
import { Router,ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import {UniversitiesService } from "../../../../services/universities.service";
import {University} from "../../../../models/university";
import {DatatableComponent} from '@swimlane/ngx-datatable'
import {Major} from "../../../../models/majoys";
import {DatatableComponent} from '@swimlane/ngx-datatable'
import {UsersService} from "../../../../services/users.service";

@Component({
  selector: 'university',
  templateUrl: './university.html',
  styleUrls: ['./university.scss'],

})
export class UniversityComponent implements OnInit {

  constructor(private route:ActivatedRoute,
              private location:Location,
              private _university_service:UniversitiesService,
              private _users_service: UsersService

  ) {
  }

  university:University
  students:Array<Student>;

  rows = [];
  temp = [];
  selected = [];
  columns = [
    { prop: 'name' },
    { name: 'id' },
    { name: 'code' }
  ];
  @ViewChild(DatatableComponent) table: DatatableComponent;


  ngOnInit():void {
    this.route.params.forEach((params:Params) => {
      let id = +params['id'];
      this.load_university(id)
      this.load_students()
    })
  }

  load_university(id:Number) {
    this._university_service.getUniversity(id).then(
        res => {
          this.university = res.data
          this.rows = [...res.data.majors]
          this.temp = [...res.data.majors]
          console.log("===== university: %o", this.university)
        }
    )
  }

  load_students(){
    this._users_service.getStudents().then(res => {
          console.log("===== res %o", res)
          this.students = res['data']
        }
    );


  }

  updateFilter(event) {
    const val = event.target.value;
    console.log("==== event %o", val)

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
  }



  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);
    //this.router.navigate(['/pages/universities/university-list/', selected[0]['id']]);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }






}