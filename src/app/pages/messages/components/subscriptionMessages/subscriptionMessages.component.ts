import { Component, OnInit, Input,ViewChild} from '@angular/core'
import { Router,ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import {DatatableComponent} from '@swimlane/ngx-datatable'


@Component({
  selector: 'subscriptionMessages',
  templateUrl: './subscriptionMessages.html',
  styleUrls: ['./subscriptionMessages.scss'],

})
export class SubscriptionMessagesComponent implements OnInit {


  ngOnInit():void {

  }

}