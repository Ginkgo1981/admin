import {Component, ViewChild, Input, Output, ElementRef, EventEmitter, OnInit} from '@angular/core';
import {MessagesService} from "../../../services/messages.service";
import { ModalDirective } from 'ng2-bootstrap';
import {Attachment} from "../../../models/attachment";
import {User} from "../../../models/user";

@Component({
  selector: 'ba-send-messages',
  styleUrls: ['./baSendMessages.scss'],
  templateUrl: './baSendMessages.html'
})
export class BaSendMessages implements OnInit{
  @ViewChild('lgModal') lgModal:ModalDirective;
  @Input() receiver:User;
  @Input() message_type: String;
  @Input() options: Array<any>
  @Input() attachment_type: String
  @Output() sendMessageOut = new EventEmitter();


  sender: User;
  attachment:Attachment;
  content:String;
  constructor(private _message_service: MessagesService){}

  ngOnInit():void {

    //todo
    this.sender = new User();
    this.sender.id = 50;

    this.attachment = new Attachment();
    this.attachment.attachment_type = this.attachment_type
  }

  showChildModal() {
    this.lgModal.show();
  }

  sendMessage(e):void {
    console.log("====== sendMessage ========")
    //this._message_service.sendMessage(this.sender.id, this.receiver.id, this.message_type, this.content, this.attachment).then(res => {
    //      this.lgModal.hide();
    //      this.sendMessageOut.emit("succ");
    //    }
    //)
  }
}