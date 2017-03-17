import { Component, OnInit, Input,ViewChild,ViewChildren, OnDestroy} from '@angular/core'
import { ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import { User } from '../../../../models'
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
  @ViewChild('story_message') story_message;
  @ViewChild('university_message') university_message;

  @Input() user:User

  messages:Array<Message>;
  @Input() storyOptions: Array<any>;
  @Input() universityOptions: ArrAY<any>;

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
      this.load_story_options();
      this.load_university_options();
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
    this._messages_service.getMessages().then(res => {
      this.messages = res['data']
    })
  }


  load_story_options(){

    this._story_service.getStories().then(res => {
      this.storyOptions = res.data.map(s => ({value: s.id, label: s.title}))
    })

  }

  load_university_options(){
    this.universityOptions = [
      {value: 1, label: '南京大学'},
      {value: 2, label: '南京林业大学'},
      {value: 3, label: '南京工业大学'}

    ]
  }

  show_story_message_modal():void {
    this.story_message.showChildModal();
  }

  show_university_message_modal():void {
    this.university_message.showChildModal();
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