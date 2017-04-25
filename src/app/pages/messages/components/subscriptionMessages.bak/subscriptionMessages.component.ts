import { Component, OnInit, Input,ViewChild} from '@angular/core'
import { Router,ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import { DatatableComponent} from '@swimlane/ngx-datatable'
import { MessagesService} from "../../../../services/messages.service";
import { Message} from "../../../../models/message";

@Component({
  selector: 'subscriptionMessages',
  templateUrl: './subscriptionMessages.component.html',
  styleUrls: ['./subscriptionMessages.componet.scss'],
})
export class SubscriptionMessagesComponent implements OnInit {

  @ViewChild('send_message_component') send_message_component;
  @ViewChild('message_list_component') message_list_component;
  message_type: String = 'SubscriptionMessage';


  constructor(private _service:MessagesService) {
  }

  ngOnInit():void {}

  showChildModal(e) {
    this.send_message_component.showChildModal();
  }

  receiveChild(e) {
    this.message_list_component.page();
  }
}