import { Component, OnInit, Input,ViewChild} from '@angular/core'
import { Router,ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import {StoriesService} from "../../../../services/stories.service";
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'story',
  templateUrl: './story.html',
  styleUrls: ['./story.scss'],

})
export class StoryComponent implements OnInit {



  //http://learnangular2.com/forms/
  //https://basvandenberg.github.io/ng-select/

  characters: Array<any>;



  public storyForm = this.fb.group({
    title: ["", Validators.required],
    content: ["", Validators.required]
  });


  constructor(private fb:FormBuilder,
              private _service:StoriesService,
              private router:Router) {
  }


  ngOnInit():void {

    this.characters = [
      {value: '0', label: 'Aech'},
      {value: '1', label: 'Art3mis'},
      {value: '2', label: 'Daito'},
      {value: '3', label: 'Parzival'},
      {value: '4', label: 'Shoto'}
    ];



    console.log('===== story =====')
  }


  createStory(e) {

    let story = this.storyForm.value;
    this._service.createStory(story)
    console.log("====== story  %o", story)


  }


}