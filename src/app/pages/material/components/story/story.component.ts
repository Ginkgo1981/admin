import { Component, OnInit, Input,ViewChild} from '@angular/core'
import { Router,ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import { StoriesService} from "../../../../services/stories.service";
import { FormBuilder, Validators } from '@angular/forms';
import { DrawerService, NotificationService } from '@swimlane/ngx-ui';
import { Member} from "../../../../models/member";
import { MemberService} from "../../../../services/member.service";
import {Major} from "../../../../models/majors";

@Component({
  selector: 'story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],

})
export class StoryComponent implements OnInit {

  public storyForm = this.fb.group({
    title: ["", Validators.required],
    content: ["", Validators.required]
  });

  @ViewChild('imageUploaderTmpl') imageUploaderTmpl:TemplateRef<any>;
  @ViewChild('majorsTmpl') majorsTmpl:TemplateRef<any>;
  imagesUploaderDrawer:DrawerService;
  majorDrawer:DrawerComponent;

  university: Member;

  major_columns = ['name', 'choose']

  constructor(private fb:FormBuilder,
              private _service:StoriesService,
              private _memberService: MemberService,
              private drawerMngr:DrawerService,
              private router:Router) {
  }

  ngOnInit():void {
    this.university = this._memberService.getMember().identity.university;
    console.debug("[story-component] ngOnInit university: %o", this.university);
  }


  createStory(e) {
    let story = this.storyForm.value;
    this._service.createStory(story).then(res => {
      console.debug("[story-component] createStory res: %o", res)
    })
  }

  openImageUploaderDrawer(e) {
    console.debug("[story-component] openImageUploaderDrawer e: %o", e)
    this.imagesUploaderDrawer = this.openDrawer(this.imageUploaderTmpl)
  }

  openMajorsDrawer(e) {
    console.debug("[story-component] openMajorsDrawer e: %o", e)
    this.majorDrawer = this.openDrawer(this.majorsTmpl)
  }

  openDrawer(template) {
    return this.drawerMngr.create({
      direction: 'left',
      template,
      size: 40,
      context: ''
    });
  }


  onPhotoSelected(e){
    console.debug("[story-component] onPhotoSelected e: %o",e )
    if(e.action === 'selected'){
      this.storyForm.controls['content'].patchValue(`${this.storyForm.controls['content'].value}
      <img width="300px" src="${e.data}"/>`)
    }
  }

  onMajorChoose(e) {
    console.debug("[story-component] onMajorChoose e: %o", e)
    if(e.action === 'choose'){
      let major: Major = e.data
      this.storyForm.controls['content']
          .patchValue(`${this.storyForm.controls['content'].value} <major> ${major.name} -- ${major.dsin} </major>

    `);
    }
  }

}