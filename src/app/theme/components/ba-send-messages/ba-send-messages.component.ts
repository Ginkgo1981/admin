import {Component, ViewChild, Input, Output, ElementRef, EventEmitter, OnInit} from '@angular/core';
import { MessagesService } from "../../../services/messages.service";
import { ModalDirective } from 'ng2-bootstrap';
import { Attachment } from "../../../models/attachment";
import { Student } from "../../../models/student";

@Component({
  selector: 'ba-send-messages',
  styleUrls: ['./ba-send-messages.component.scss'],
  templateUrl: './ba-send-messages.component.html'
})
export class BaSendMessages implements OnInit {
  @ViewChild('lgModal') lgModal:ModalDirective;
  @Input() student:Student;
  @Output() sendMessageOut = new EventEmitter();

  message_type:String = 'PointMessage';
  attachment_type:String
  attachment_id:Number
  sender_id:Number;
  attachment:Attachment;
  content:String;
  options:Array<any>
  temp_options:Array<any>;

  constructor(private _message_service:MessagesService) {
  }

  ngOnInit():void {
    this.sender_id = 86;
    //this.load_options();
  }

  ngx_change(event) {
    console.debug("[ba-send-messages] ngx_change event: %o", event[0])
    this.attachment_id = event[0]
  }

  //load_options() {
  //  this._message_service.getOptions().then(res => {
  //        console.debug("[ba-send-message] load_options res: %o", res)
  //        this.temp_options = res.data;
  //      }
  //  )
  //}

  showChildModal() {
    this.lgModal.show();
  }

  //chooseAttachmentType(attachment_type:String) {
  //  console.debug("[ba-send-messages] chooseAttachmentType attachment_type: %o", attachment_type)
  //  this.attachment_type = attachment_type
  //  this.options = this.temp_options[attachment_type]
  //}

  //sendMessage(e):void {
  //  this.attachment = new Attachment(this.attachment_id, this.attachment_type)
  //  console.debug("[ba-send-message] sendMessage dsin: %o, message_type: %o, content: %o, attachment: %o", this.student.dsin, this.message_type, this.content, this.attachment)
  //  this._message_service.sendMessage(this.student.dsin, this.message_type, this.content, this.attachment).then(res => {
  //        console.debug("[ba-send-message] sendMessage res: %o", res)
  //        this.lgModal.hide();
  //        this.sendMessageOut.emit("succ");
  //      }
  //  )
  //}
}