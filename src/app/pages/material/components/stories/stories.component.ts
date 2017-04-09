import { Component, OnInit, Input,ViewChild} from '@angular/core'
import { Router,ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import {StoriesService} from "../../../../services/stories.service";

@Component({
  selector: 'stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],

})
export class StoriesComponent implements OnInit {

  stories:Array<any>

  constructor(private _service:StoriesService,
              private router:Router) {
  }

  ngOnInit():void {
    this._service.getStories().then(res => {
      console.log("====== stories component res: %o", res);
      this.stories = res['data']
    })

  }

  create_story(e) {
    console.log('===== create_story ======')
    this.router.navigate(['/pages/materials/stories/create']);
  }


}