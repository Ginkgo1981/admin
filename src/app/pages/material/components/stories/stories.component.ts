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
    this.get_stories();
  }

  get_stories() {
    this._service.getStories().then(res => {
      console.debug("[stories-component] get_stories res: %o", res);
      this.stories = res.stories;
    })
  }
}