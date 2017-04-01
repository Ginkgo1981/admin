import { Component, OnInit, Input,ViewChild} from '@angular/core'
import { Router,ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import {UniversitiesService } from "../../../../services/universities.service";
import {University} from "../../../../models/university";
import {Major} from "../../../../models/majors";
import {DatatableComponent} from '@swimlane/ngx-datatable'
import {UsersService} from "../../../../services/users.service";
import {User} from "../../../../models/user";
import {DsinService} from "../../../../services/dsin.service";

@Component({
  selector: 'university',
  templateUrl: './university.html',
  styleUrls: ['./university.scss'],

})
export class UniversityComponent implements OnInit {

  constructor(private route:ActivatedRoute,
              private location:Location,
              private _university_service:UniversitiesService,
              private _users_service:UsersService,
              private _dsin_service:DsinService) {
  }

  university:University
  students:Array<User>;

  rows = [];
  temp = [];
  selected = [];
  columns = [
    {prop: 'name'},
    {name: 'id'},
    {name: 'code'}
  ];
  @ViewChild(DatatableComponent) table:DatatableComponent;

  ngOnInit():void {
    let dsin = this.route.params.value.dsin;
    this.load_by_dsin(dsin)
  }

  load_by_dsin(dsin:String) {
    this._dsin_service.get_by_dsin(dsin).then(res => {
          console.log("res==== %o", res)
          this.university = res['university']
        }
    );
  }
  load_majors_by_university_dsin(dsin: String) {


  }

  //load_university(id:Number) {
  //  this._university_service.getUniversity(id).then(
  //      res => {
  //        this.university = res.data
  //        //this.rows = [...res.data.majors]
  //        //this.temp = [...res.data.majors]
  //        //console.log("===== university: %o", this.university)
  //      }
  //  )
  //}

  updateFilter(event) {
    const val = event.target.value;
    console.log("==== event %o", val)

    // filter our data
    const temp = this.temp.filter(function (d) {
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
