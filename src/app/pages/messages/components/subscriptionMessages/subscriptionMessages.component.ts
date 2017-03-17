import { Component, OnInit, Input,ViewChild} from '@angular/core'
import { Router,ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import {DatatableComponent} from '@swimlane/ngx-datatable'
import {MessagesService} from "../../../../services/messages.service";


@Component({
  selector: 'subscriptionMessages',
  templateUrl: './subscriptionMessages.html',
  styleUrls: ['./subscriptionMessages.scss'],

})
export class SubscriptionMessagesComponent implements OnInit {

  messages:Array<Message>
  constructor(private _service:MessagesService) {}
  ngOnInit():void {
    this._service.getMessages('SubscriptionMessage').then(res => {
          let messages = res.data
          console.log("===== messages ==== %o", messages)
          this.messages = messages;
        }
    )
  }

}