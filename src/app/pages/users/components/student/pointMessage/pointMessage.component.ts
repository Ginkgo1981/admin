import { Component, OnInit, Input,Output,ViewChild,ViewChildren, OnDestroy, EventEmitter} from '@angular/core'
import { ActivatedRoute, Params, Router} from '@angular/router'
import { Location } from '@angular/common'
import { FormBuilder, Validators } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { ModalDirective } from 'ng2-bootstrap';
import { Student } from '../../../../../models'
import { StoriesService } from '../../../../../services/stories.service'
import { MessagesService } from '../../../../../services/messages.service'
import { Attachment } from '../../../../../models/attachment'

@Component({
  selector: 'point-message',
  templateUrl: './pointMessage.html',
  styleUrls: ['./pointMessage.scss']
})
export class PointMessageComponent implements OnInit {

  @ViewChild('lgModal') lgModal:ModalDirective;
  @Input() student:Student;
  @Input() messageBody:String;
  @Output() sendMessageOut = new EventEmitter();
  attachment:Attachment;
  storyOptions:Array<any>;

  constructor(private _story_service:StoriesService,
              private _message_service:MessagesService) {
  }

  ngOnInit():void {
    this.attachment = new Attachment();
    this.attachment.attachment_type = 'Story'
    this._story_service.getStories().then(res => {
      this.storyOptions = res.data.map(s => ({value: s.id, label: s.title}))
    })
  }

  showChildModal() {
    this.lgModal.show();
  }

  sendMessage(e):void {
    this._message_service.sendMessage(this.student.id, this.messageBody, this.attachment).then(res => {
          this.lgModal.hide();
          this.sendMessageOut.emit("succ");
        }
    )
  }
}