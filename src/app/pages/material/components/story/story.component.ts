import { Component, OnInit, Input,ViewChild} from '@angular/core'
import { Router,ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import { StoriesService} from "../../../../services/stories.service";
import { FormBuilder, Validators } from '@angular/forms';
import { DrawerComponent,DrawerService, NotificationService } from '@swimlane/ngx-ui';
import { Member} from "../../../../models/member";
import { MemberService} from "../../../../services/member.service";
import { Major} from "../../../../models/majors";
import { University} from "../../../../models/university";
import { DsinService} from "../../../../services/dsin.service";

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

  @ViewChild('imageUploaderTmpl') imageUploaderTmpl;
  //@ViewChild('majorsTmpl') majorsTmpl;
  //drawer
  imagesUploaderDrawer:DrawerService;
  majorDrawer:DrawerComponent;

  id:String
  major_columns = ['name', 'choose']
  coverage_img_url: String;

  constructor(private fb:FormBuilder,
              private route:ActivatedRoute,
              private _storiesService:StoriesService,
              private _memberService:MemberService,
              private drawerMngr:DrawerService,
              private notificationService:NotificationService,
              private router:Router) {
  }

  ngOnInit():void {
    //this.university = this._memberService.getMember().identity.university;
    this.id = this.route.params['value']['id'];
    console.debug("[story-component] ngOnInit id: %o", this.id);
    if(this.id){
      this.getStory(this.id.toString());
    }
  }


  getStory(id:string){
    this._storiesService.getStory(id).then(res => {
      console.debug("[story-component] getStory id: %o, res: %o", id, res)
      let story = res.data
      this.storyForm.controls['title'].setValue(story.title);
      this.storyForm.controls['content'].setValue(story.content)
    })
  }

  onUpdateOrCreate(e) {
    let story = this.storyForm.value
    console.debug("[story-component] story %o", story);
    if(this.id){
      //update
      this._storiesService.updateStory(this.id, story).then(res => {
        console.debug("[story-component] updateStory res: %o", res);
        this.showNotification("更新成功");
      });
    } else {
      this._storiesService.createStory(story).then(res => {
        console.debug("[story-component] createStory res: %o", res)
        this.showNotification("创建成功");
      })
    }
  }

  onDelete(e){
    if(this.id){
      this._storiesService.deleteStory(this.id).then(res => {
        console.debug("[story-component] onDelete res: %o", res);
        this.showNotification("删除成功");
      });
    }

  }

  onOpenImageUploaderDrawer(e) {
    console.debug("[story-component] openImageUploaderDrawer e: %o", e)
    this.imagesUploaderDrawer = this.openDrawer(this.imageUploaderTmpl)
  }

  openDrawer(template) {
    return this.drawerMngr.create({ direction: 'left', template, size: 40, context: '' });
  }

  onPhotoSelected(e) {
    console.debug("[story-component] onPhotoSelected e: %o", e)
    this.storyForm.controls['content'].patchValue(`${this.storyForm.controls['content'].value} <img width="300px" src="${e.data}"/>`)
    if(!this.coverage_img_url){
      this.coverage_img_url = e.data;
    }
  }

  showNotification(body:String) {
    this.notificationService.create({ title: '信息更新提示!', body: body, styleType: 'success', timeout: 10000, rateLimit: false })
  }

}