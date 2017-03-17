import { Component, OnInit, Input,ViewChild} from '@angular/core'
import { Router,ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import {DatatableComponent} from '@swimlane/ngx-datatable'
import {Message} from "../../../../models/message";
import {MessagesService} from "../../../../services/messages.service";


@Component({
  selector: 'pointMessages',
  templateUrl: './pointMessages.html',
  styleUrls: ['./pointMessages.scss'],

})
export class PointMessagesComponent implements OnInit {

  messages:Array<Message>
  constructor(private _service:MessagesService) {}
  ngOnInit():void {
    this._service.getMessages('PointMessage').then(res => {
          let messages = res.data
          console.log("===== messages ==== %o", messages)
          this.messages = messages;
        }
    )
  }

}