import { Component, OnInit, Input,ViewChild,ViewChildren, OnDestroy} from '@angular/core'
import { ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import { UsersService } from '../../../../services/users.service'
import { MessagesService } from "../../../../services/messages.service";
import { NotificationsService } from 'angular2-notifications';
import {StoriesService} from "../../../../services/stories.service";
import {User} from "../../../../models/user";
import {Message} from "../../../../models/message";

@Component({
  selector: 'student',
  templateUrl: './student.html',
  styleUrls: ['./student.scss'],

})
export class StudentComponent implements OnInit, OnDestroy {
  @ViewChild('message_component') message_component;
  @ViewChild('university_message') university_message;

  @Input() user:User
  messages:Array<Message>;

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
      this.load_student(id);
      this.load_messages();
      //this.options = this.storyOptions
    });
  }

  load_student(id: Number){
    this._users_service.getUser(id).then(res => {
          this.user = res['data']['user']
        }
    );
  }

  load_messages(){
    this._messages_service.getMessages('PointMessage').then(res => {
      this.messages = res['data']
    })
  }



  show_message_modal():void {
    this.message_component.showChildModal();
  }

  //show_university_message_modal():void {
  //  this.university_message.showChildModal();
  //}

  receiveChild(e) {
    if (e === "succ") {
      this.load_messages();
      this._notificationsService.success('信息发送...', '', {timeOut: 2000, maxLength: 10});
    }
  }

  ngOnDestroy():void {
  }

}