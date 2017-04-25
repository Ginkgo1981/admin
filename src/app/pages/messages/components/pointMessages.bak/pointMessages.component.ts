import { Component, OnInit, Input,ViewChild} from '@angular/core'
import { Router,ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import {DatatableComponent} from '@swimlane/ngx-datatable'
import {Message} from "../../../../models/message";
import {MessagesService} from "../../../../services/messages.service";
import { FileUploaderOptions, FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'pointMessages',
  templateUrl: './pointMessages.component.html',
  styleUrls: ['./pointMessages.component.scss'],

})
export class PointMessagesComponent implements OnInit {

  message_type: String = 'PointMessage'
  constructor(private _service:MessagesService) {}
  ngOnInit():void { }



  uploadOptions = {
    url: 'https://evening-anchorage-3159.herokuapp.com/api/',
    autoUpload: true
  };
  uploaderInstance = new FileUploader({
    url: 'https://evening-anchorage-3159.herokuapp.com/api/',
    autoUpload: false
  });




}