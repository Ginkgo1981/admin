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
export class BaSendMessages implements OnInit {
  @ViewChild('lgModal') lgModal:ModalDirective;
  @Input() receiver_id:Number;
  @Input() message_type:String;
  @Output() sendMessageOut = new EventEmitter();

  attachment_type:String
  attachment_id:Number
  sender_id:Number;
  attachment:Attachment;
  content:String;
  options:Array<any>
  temp_options:Array<any>;
  option_groups:Array<String>;

  constructor(private _message_service:MessagesService) { }

  ngOnInit():void {
    this.sender_id = 86;
    this.load_options();
  }


  load_options() {
    this._message_service.getOptions()
        .then(res => {
          this.temp_options = res.data;
          this.option_groups = Object.keys(this.temp_options)
        }
    )
  }

  showChildModal() {
    this.lgModal.show();
  }

  option_group_change(e) {
    this.attachment_type = e.value
    this.options = this.temp_options[e.value]
  }

  sendMessage(e):void {
    this.attachment = new Attachment(this.attachment_id, this.attachment_type)
    this._message_service.sendMessage(this.sender_id, this.receiver_id, this.message_type, this.content, this.attachment).then(res => {
          this.lgModal.hide();
          this.sendMessageOut.emit("succ");
        }
    )
  }
}