import { Component, OnInit, Input,ViewChild} from '@angular/core'
import { Router,ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import { DatatableComponent} from '@swimlane/ngx-datatable'
import { MessagesService} from "../../../../services/messages.service";
import { Message} from "../../../../models/message";

@Component({
  selector: 'notificationMessages',
  templateUrl: './notificationMessages.html',
  styleUrls: ['./notificationMessages.scss'],

})
export class NotificationMessagesComponent implements OnInit {

  @ViewChild('send_message_component') send_message_component;
  @ViewChild('message_list_component') message_list_component;

  ngOnInit():void {}

  showChildModal(e) {
    this.send_message_component.showChildModal();
  }

  receiveChild(e) {
    this.message_list_component.page();
  }
}