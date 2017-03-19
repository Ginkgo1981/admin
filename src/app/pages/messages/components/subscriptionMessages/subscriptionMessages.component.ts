import { Component, OnInit, Input,ViewChild} from '@angular/core'
import { Router,ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import {DatatableComponent} from '@swimlane/ngx-datatable'
import {MessagesService} from "../../../../services/messages.service";
import {Message} from "../../../../models/message";


@Component({
  selector: 'subscriptionMessages',
  templateUrl: './subscriptionMessages.html',
  styleUrls: ['./subscriptionMessages.scss'],

})
export class SubscriptionMessagesComponent implements OnInit {

  @ViewChild('message_component') message_component;

  messages:Array<Message>
  constructor(private _service:MessagesService) {}


  ngOnInit():void {
    this.load_messages();
  }


  load_messages(){
    this._service.getMessages('SubscriptionMessage')
        .then(res => {
              this.messages = res.data;
            }
        )
  }

  showChildModal(e){
    this.message_component.showChildModal();
  }

  receiveChild(e) {
    if (e === "succ") {
      this.load_messages();
    }
  }


}