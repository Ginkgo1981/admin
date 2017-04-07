import {Component, ViewChild, Input, Output, ElementRef, EventEmitter, OnInit} from '@angular/core';
import {MessagesService} from "../../../services/messages.service";
import { ModalDirective } from 'ng2-bootstrap';
import {Attachment} from "../../../models/attachment";
import {User} from "../../../models/user";
import {Student} from "../../../models/student";

@Component({
  selector: 'ba-send-messages',
  styleUrls: ['./ba-send-messages.scss'],
  templateUrl: './ba-send-messages.html'
})
export class BaSendMessages implements OnInit {
  @ViewChild('lgModal') lgModal:ModalDirective;
  @Input() receiver: Student;
  @Input() message_type:String;
  @Output() sendMessageOut = new EventEmitter();

  attachment_type:String
  attachment_id:Number
  sender_id:Number;
  attachment:Attachment;
  content:String;
  options:Array<any>
  temp_options:Array<any>;

  constructor(private _message_service:MessagesService) { }

  ngOnInit():void {
    this.sender_id = 86;
    this.load_options();
  }


  ngx_change(event){
    console.log("===== ngx_change %o", event[0])
    this.attachment_id = event[0]
  }

  load_options() {
    this._message_service.getOptions()
        .then(res => {
          this.temp_options = res.data;
        }
    )
  }

  showChildModal() {
    this.lgModal.show();
  }

  chooseAttachmentType(attachment_type: String){
    console.log("===== attachment_type: %o", attachment_type)
    this.attachment_type = attachment_type
    this.options = this.temp_options[attachment_type]
  }

  sendMessage(e):void {
    this.attachment = new Attachment(this.attachment_id, this.attachment_type)
    this._message_service.sendMessage(this.sender_id, this.receiver.dsin, this.message_type, this.content, this.attachment).then(res => {
          this.lgModal.hide();
          this.sendMessageOut.emit("succ");
        }
    )
  }
}