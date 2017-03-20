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

  toolbarMenu = [
    {
      label: '下发图文消息',
      click: () => {
        this.message_component.showChildModal();
        console.log('File clicked');
      }
    },
    {
      label: '给学生打标签',
      click: () => {
        this.message_component.showChildModal();
        console.log('File clicked');
      }
    },
    {
      label: '打标签   ',
      click: () => {
        this.message_component.showChildModal();
        console.log('File clicked');
      }
    },
    {
      label: '打标签2',
      click: () => {
        this.message_component.showChildModal();
        console.log('File clicked');
      }
    }
  ];



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

  receiveChild(e) {
    if (e === "succ") {
      this.load_messages();
      this._notificationsService.success('信息发送...', '', {timeOut: 2000, maxLength: 10});
    }
  }

  ngOnDestroy():void {
  }



  menuClicked(e){

    console.log("==== e")
  }

}