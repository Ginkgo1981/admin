import { Component, OnInit, Input,ViewChild} from '@angular/core'
import { Router,ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import { StoriesService} from "../../../../services/stories.service";
import { FormBuilder, Validators } from '@angular/forms';
import { DrawerService, NotificationService } from '@swimlane/ngx-ui';
import { Member} from "../../../../models/member";
import { MemberService} from "../../../../services/member.service";
import { Major} from "../../../../models/majors";
import { University} from "../../../../models/university";
import { DsinService} from "../../../../services/dsin.service";

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],

})
export class MessageComponent implements OnInit {

  public storyForm = this.fb.group({
    title: ["", Validators.required],
    content: ["", Validators.required]
  });

  @ViewChild('imageUploaderTmpl') imageUploaderTmpl:TemplateRef<any>;
  @ViewChild('majorsTmpl') majorsTmpl:TemplateRef<any>;
  imagesUploaderDrawer:DrawerService;
  majorDrawer:DrawerComponent;

  university:University;

  message_dsin:String

  major_columns = ['name', 'choose']

  constructor(private fb:FormBuilder,
              private route:ActivatedRoute,
              private _service:StoriesService,
              private _dsin_service:DsinService,
              private _memberService:MemberService,
              private drawerMngr:DrawerService,
              private notificationService:NotificationService,
              private router:Router) {
  }

  ngOnInit():void {
    this.university = this._memberService.getMember().identity.university;
    this.message_dsin = this.route.params.value.message_dsin;
    console.debug("[message-component] ngOnInit message_dsin: %o, university: %o", this.message_dsin, this.university);
    //if (this.message_dsin) { this.get_by_dsin(this.message_dsin); }
  }


  get_by_dsin(story_dsin:String){
    this._dsin_service.get_by_dsin(this.story_dsin).then(res => {
      console.debug("[message-component] get_by_dsin dsin: %o, res: %o", this.story_dsin, res)
      let message = res.message;
      //this.storyForm.controls['title'].setValue(story.title);
      //this.storyForm.controls['content'].setValue(story.content)
    })
  }

  update_or_create(e) {
    let story = this.storyForm.value;
    if(!this.story_dsin){
      this._service.createStory(story).then(res => {
        console.debug("[story-component] create res: %o", res)
        let story = res.story;
        this.story_dsin = story.dsin;
        this.showNotification('图文创建成功');
      })
    }else {

      this._dsin_service.update_dsin(this.story_dsin, story).then(res => {
        console.debug("[story-component] update dsin: %o, res: %o", this.story_dsin, res);
        this.showNotification('图文更新成功');
      })
    }
  }

  delete_story(e){
    if(this.story_dsin){
      this._dsin_service.remove(this.story_dsin).then(res => {
        console.debug("[story-component] delete dsin: %o, res: %o", this.story_dsin, res);
        this.showNotification('图文删除成功');
      })
    }
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


  onPhotoSelected(e) {
    console.debug("[story-component] onPhotoSelected e: %o", e)
    if (e.action === 'selected') {
      this.storyForm.controls['content'].patchValue(`${this.storyForm.controls['content'].value}
      <img width="300px" src="${e.data}"/>`)
    }
  }

  onMajorChoose(e) {
    console.debug("[story-component] onMajorChoose e: %o", e)
    if (e.action === 'choose') {
      let major:Major = e.data
      this.storyForm.controls['content']
          .patchValue(`${this.storyForm.controls['content'].value} <major> ${major.name} -- ${major.dsin} </major>

    `);
    }
  }


  showNotification(body:String) {
    this.notificationService.create({
      title: '信息更新提示!',
      body: body,
      styleType: 'success',
      timeout: 10000,
      rateLimit: false
    })
  }

}