import { Component, OnInit, Input,ViewChild} from '@angular/core'
import { Router,ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import {UniversitiesService } from "../../../../services/universities.service";
import {University} from "../../../../models/university";
import {DatatableComponent} from '@swimlane/ngx-datatable'
import {MemberService} from "../../../../services/member.service";


@Component({
  selector: 'job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'],

})
export class JobListComponent implements OnInit {
  university_dsin:String;
  constructor(private router:Router,
              private _member_service: MemberService,
              private _service:UniversitiesService) {
  }

  ngOnInit():void {
    console.debug("[job-list-component] ngOnInit")
    //this.university_dsin = this._member_service.getMember().identity.university.dsin;
  }

}