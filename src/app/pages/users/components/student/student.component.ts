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
import {Student} from "../../../../models/student";
import {DsinService} from "../../../../services/dsin.service";

@Component({
  selector: 'student',
  templateUrl: './student.html',
  styleUrls: ['./student.scss'],

})
export class StudentComponent implements OnInit, OnDestroy {
  @ViewChild('message_component') message_component;
  @ViewChild('university_message') university_message;

  student:Student
  messages:Array<Message>;

  toolbarMenu = [
    {
      label: '下发消息',
      click: () => {
        this.message_component.showChildModal();
      }
    },
    {
      label: '打标签',
      click: () => {
        this.message_component.showChildModal();
      }
    }
  ];

  constructor(private route:ActivatedRoute,
              private location:Location,
              private _users_service:UsersService,
              private _notificationsService:NotificationsService,
              private _messages_service:MessagesService,
              private _story_service: StoriesService,
              private _dsin_service: DsinService

  ) {
  }

  ngOnInit():void {
    console.log(" this.route.params ==== %o", this.route.params.value.dsin)
    let dsin = this.route.params.value.dsin
    this.load_student(dsin)
    this.load_messages();
  }

  load_student(dsin: String){
    this._dsin_service.get_by_dsin(dsin).then(res => {
      console.log("==== get_by_dsin === %o", res)
          this.student = res['student']
      console.log("==== load_student === %o", this.student)
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