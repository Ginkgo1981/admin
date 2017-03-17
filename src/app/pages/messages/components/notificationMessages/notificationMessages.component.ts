import { Component, OnInit, Input,ViewChild} from '@angular/core'
import { Router,ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import {DatatableComponent} from '@swimlane/ngx-datatable'
import {MessagesService} from "../../../../services/messages.service";


@Component({
  selector: 'notificationMessages',
  templateUrl: './notificationMessages.html',
  styleUrls: ['./notificationMessages.scss'],

})
export class NotificationMessagesComponent implements OnInit {

  @ViewChild('story_message') story_message;

  messages:Array<Message>
  constructor(private _service:MessagesService) {}
  ngOnInit():void {
    this._service.getMessages('NotificationMessage').then(res => {
          let messages = res.data
          console.log("===== messages ==== %o", messages)
          this.messages = messages;
        }
    )
  }


  sendMessage(e){


    console.log("====== e: %o", e)
    this.story_message.showChildModal();

  }


}