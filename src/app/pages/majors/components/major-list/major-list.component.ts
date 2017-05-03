import { Component, OnInit, Input,ViewChild} from '@angular/core'
import { Router,ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import {UniversitiesService } from "../../../../services/universities.service";
import {University} from "../../../../models/university";
import {DatatableComponent} from '@swimlane/ngx-datatable'
import {MemberService} from "../../../../services/member.service";


@Component({
  selector: 'major-list',
  templateUrl: './major-list.component.html',
  styleUrls: ['./major-list.component.scss'],

})
export class MajorListComponent implements OnInit {
  university_dsin:String;
  constructor(private router:Router,
              private _member_service: MemberService,
              private _service:UniversitiesService) {
  }

  ngOnInit():void {
    console.debug("[major-list-component] ngOnInit")
    this.university_dsin = this._member_service.getMember().identity.university.dsin;
  }

}