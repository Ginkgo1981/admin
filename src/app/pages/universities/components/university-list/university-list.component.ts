import { Component, OnInit, Input,ViewChild} from '@angular/core'
import { Router,ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import {UniversitiesService } from "../../../../services/universities.service";
import {University} from "../../../../models/university";
import {DatatableComponent} from '@swimlane/ngx-datatable'


@Component({
  selector: 'university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.componet.scss'],

})
export class UniversityListComponent implements OnInit {
  universities:Array<University>
  temp = [];
  selected = [];
  columns = [
    { prop: 'name' },
    { name: 'dsin' },
    { name: 'address' }
  ];
  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(private router:Router,
              private _service:UniversitiesService) {
  }

  ngOnInit():void {
    this._service.getList().then(res => {
      console.log('==== universities %o', res)
      let data =  res['universities']
      this.temp = [...data];
      this.universities = data;
      console.log('==== temp %o', this.temp)
      console.log('==== universities %o', this.universities)
    })

  }

  updateFilter(event) {
    const val = event.target.value;
    console.log("==== event %o", val)

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    this.universities = temp;
  }



  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);
    this.router.navigate(['/pages/universities/', selected[0]['dsin']]);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }




}