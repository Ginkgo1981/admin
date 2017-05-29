import { Component, OnInit, Input,ViewChild} from '@angular/core'
import { Router,ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import {StoriesService} from "../../../../services/stories.service";
import {MemberService} from "../../../../services/member.service";

@Component({
  selector: 'stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],

})
export class StoriesComponent implements OnInit {

  stories:Array<any>

  university_dsin: String;

  constructor(
      private route:ActivatedRoute,
      private location:Location,
      private _service:StoriesService,
      private _member_service: MemberService,
              private router:Router) {
  }

  ngOnInit():void {
    this.university_dsin = this.route.params['value']['dsin'] || this._member_service.getMember().identity.university.dsin;
  }

  onStoryActivateChanged(e){
    console.debug("[stories-component] onActivateChanged e:%o", e);
    let action = e.action;
    let story = e.data;
    if(action === 'edit'){
      this.router.navigate(['/pages/materials/', story.dsin]);
    }
  }
}