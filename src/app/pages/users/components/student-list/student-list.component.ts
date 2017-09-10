import { Component, OnInit, Input,ViewChild, TemplateRef} from '@angular/core'
import { Router,ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import { MemberService} from "../../../../services/member.service";

@Component({
  selector: 'students',
  templateUrl: './student-list.component.html'
})
export class StudentListComponent implements OnInit  {

  constructor(
      private route:ActivatedRoute,
      private location:Location,
      private _member_service: MemberService
  ) {
  }


  ngOnInit():void {
  }


  //ngOnInit():void {
  //  this.university_dsin = this.route.params['value']['university_dsin'] || this._member_service.getMember().identity.university.dsin;
  //  console.debug("[student-list-component] ngOnInit university_dsin: %o", this.university_dsin);
  //}

}