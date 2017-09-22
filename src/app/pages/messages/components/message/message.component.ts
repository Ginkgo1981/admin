import { Component, OnInit, Input,ViewChild} from '@angular/core'
import { Router,ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import { StoriesService} from "../../../../services/stories.service";
import { FormBuilder, Validators } from '@angular/forms';
import { DrawerService,DrawerComponent, OverlayService, NotificationService } from '@swimlane/ngx-ui';
import { Member} from "../../../../models/member";
import { MemberService} from "../../../../services/member.service";
import { Major} from "../../../../models/majors";
import { University} from "../../../../models/university";
import { DsinService} from "../../../../services/dsin.service";
import { Student} from "../../../../models/student";
import { Story} from "../../../../models/story";
import { MessagesService} from "../../../../services/messages.service";

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],

})
export class MessageComponent implements OnInit {

  @ViewChild('imageUploaderTmpl') imageUploaderTmpl;
  //@ViewChild('majorsTmpl') majorsTmpl;
  //@ViewChild('studentsTmpl') studentsTmpl;
  @ViewChild('storiesTmpl') storiesTmpl;

  //drawer
  imagesUploaderDrawer:DrawerService;
  //majorDrawer:DrawerComponent;
  //studentsDrawer: DrawerComponent;
  storiesDrawer: DrawerComponent;

  //model
  university:University;


  selected_students = [];
  attachments =  [];
  content: String = '';

  constructor(private fb:FormBuilder,
              private route:ActivatedRoute,
              private _service:StoriesService,
              private _dsin_service:DsinService,
              private _memberService:MemberService,
              private _messageService:MessagesService,
              private drawerMngr:DrawerService,
              private notificationService:NotificationService,
              private router:Router) {
  }

  ngOnInit():void {
    //this.university = this._memberService.getMember().identity.university;
    //this.message_dsin = this.route.params.value.message_dsin;
    console.debug("[message-component] ngOnInit university: %o", this.university);
  }

  onSendNotificationMessage(e) {
    //let student_dsins = this.selected_students.map(s => s.dsin);
    let attachment_ids = this.attachments.map(s => {return {id: s.id, type: s.type}});
    let content = this.content;
    console.debug("[message-component] sendNotificationMessage  attachment_ids: %o, content:%o", attachment_ids, content);
    this._messageService.sendNotificationMessage(content, attachment_ids).then(res => {
      this.showNotification('学校基本信息更新成功');
      console.debug("[message-component] sendNotificationMessage res: %o", res);
    });
  }

  openImageUploaderDrawer(e) {
    console.debug("[message-component] openImageUploaderDrawer e: %o", e);
    this.imagesUploaderDrawer = this.openDrawer(this.imageUploaderTmpl);
  }

  //openMajorsDrawer(e) {
  //  console.debug("[message-component] openMajorsDrawer e: %o", e);
  //  this.majorDrawer = this.openDrawer(this.majorsTmpl);
  //}

  //openStudentDrawer(e) {
  //  console.debug("[message-component] openStudentDrawer e: %o", e);
  //  this.studentsDrawer = this.openDrawer(this.studentsTmpl);
  //}


  openStoriesDrawer(e) {
    console.debug("[message-component] openStroiesDrawer e: %o", e);
    this.storiesDrawer = this.openDrawer(this.storiesTmpl);
  }

  openDrawer(template) {
    return this.drawerMngr.create({ direction: 'left', template, size: 40, context: '' });
  }

  onPhotoSelected(e) {
    console.debug("[message-component] onPhotoSelected e: %o", e)
    let photo = e.data;
    this.attachments.push(photo);
  }

  //onMajorChoose(e) {
  //  console.debug("[message-component] onMajorChoose e: %o", e)
  //  let major:Major = e.data;
  //  this.attachments.push(major);
  //}

  //onStudentSelected(e){
  //  console.debug("[message-component] onStudentSelected e: %o", e)
  //  let student = e.data;
  //  this.selected_students.push(student);
  //}

  onStoriesSelected(e){
    console.debug("[message-component] onStoriesSelected e: %o", e)
    let story = e.data;
    this.attachments.push(story)
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

  //dnd Staffs
  onDragSuccess(e){
    console.debug("[message-component] onDragSuccess: %o",e)
  }

  onDragStart(e){
    console.debug("[message-component] onDragStart: %o",e)
  }

  onDragOver(e){
    console.debug("[message-component] onDragOver: %o",e)
  }

  onDragEnd(e){
    console.debug("[message-component] onDragEnd: %o",e)
  }

  onDropSuccess(e){
    console.debug("[message-component] onDropSuccess: %o",e)
  }

}