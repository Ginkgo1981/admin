import {Component, ViewChild, Input, Output, ElementRef, EventEmitter, OnInit} from '@angular/core';
import {MessagesService} from "../../../services/messages.service";
import { ModalDirective } from 'ng2-bootstrap';
import {Attachment} from "../../../models/attachment";

@Component({
  selector: 'ba-send-point-messages',
  styleUrls: ['./baSendPointMessages.scss'],
  templateUrl: './baSendPointMessages.html'
})
export class BaSendPointMessages implements OnInit{


  @ViewChild('lgModal') lgModal:ModalDirective;
  @Input() student:Student;
  @Output() sendMessageOut = new EventEmitter();
  @Input() options: Array<any>
  attachment:Attachment;
  messageBody:String;
  constructor(private _message_service: MessagesService){}

  ngOnInit():void {
    this.attachment = new Attachment();
    this.attachment.attachment_type = 'Story'
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