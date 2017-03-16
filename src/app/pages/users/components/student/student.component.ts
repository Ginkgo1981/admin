import { Component, OnInit, Input,ViewChild,ViewChildren, OnDestroy} from '@angular/core'
import { ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import { Student } from '../../../../models'
import { UsersService } from '../../../../services/users.service'
import { MessagesService } from "../../../../services/messages.service";
import { NotificationsService } from 'angular2-notifications';
import {StoriesService} from "../../../../services/stories.service";

@Component({
  selector: 'student',
  templateUrl: './student.html',
  styleUrls: ['./student.scss'],

})
export class StudentComponent implements OnInit, OnDestroy {
  @ViewChild('pointmessage') pointmessage;
  @Input() student:Student

  messages:Array<Message>


  @Input() options: Array<any>

  constructor(private route:ActivatedRoute,
              private location:Location,
              private _users_service:UsersService,
              private _notificationsService:NotificationsService,
              private _messages_service:MessagesService,
              private _story_service: StoriesService

  ) {
  }

  ngOnInit():void {
    this.route.params.forEach((params:Params) => {
      let id = +params['id'];
      this.load_options();
      this.load_student(id);
      this.load_messages();
      //this.options = this.storyOptions
    });
  }

  load_student(id: Number){
    this._users_service.getStudent(id).then(res => {
          this.student = res['data']['user']
        }
    );
  }

  load_messages(){
    this._messages_service.getMessages().then(res => {
      this.messages = res['data']
    })
  }


  load_options(){

    this._story_service.getStories().then(res => {
      this.options = res.data.map(s => ({value: s.id, label: s.title}))
    })

  }

  showChildModal():void {

    console.log(" ======options: %o", this.storyOptions)
    this.pointmessage.showChildModal()
  }

  receiveChild(e) {
    if (e === "succ") {
      this.load_messages();
      this._notificationsService.success('信息发送...', '', {timeOut: 2000, maxLength: 10});
    }
  }

  ngOnDestroy():void {
  }

}