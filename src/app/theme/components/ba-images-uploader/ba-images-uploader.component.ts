import {Component, ViewChild, Inject, NgZone, HostBinding,Input, Output, ElementRef, EventEmitter, OnInit} from '@angular/core';
import {MessagesService} from "../../../services/messages.service";
import { ModalDirective } from 'ng2-bootstrap';
import {Attachment} from "../../../models/attachment";
import {User} from "../../../models/user";
import {UsersService} from "../../../services/users.service";
import {Student} from "../../../models/student";
import {DsinService} from "../../../services/dsin.service";
import { NgUploaderOptions, UploadedFile, UploadRejected } from 'ngx-uploader';

@Component({
  selector: 'ba-images-uploader',
  styleUrls: ['./ba-images-uploader.component.scss'],
  templateUrl: './ba-images-uploader.component.html'
})

export class BaImagesUploader implements OnInit {

  options: NgUploaderOptions;
  response: any;

  @Output()
  public onStateChanged = new EventEmitter();

  cable_api = 'http://api.gaokao2017.cn';
  fieldName = 'images';

  constructor(
      @Inject(NgZone) private zone: NgZone
  ) {}

  //@HostBinding( 'class' ) get btn() {
  //  return 'btn btn-primary fileinput-button';
  //}

  handleUpload(data:any): void {

    console.log("==== handleUpload =====")
    setTimeout(() => {
      this.zone.run(() => {
        console.log("==== handleUpload zone =====")
        this.response = data;
        if (data && data.response) {
          this.response = JSON.parse(data.response);
          this.onStateChanged.emit( {
            action: 'end',
            data: this.response
          } );
        }
      });
    });
  }

  uploadStart(data:any): void {
    this.zone.run(() => {
      console.log("==== uploadStart zone =====")
      this.onStateChanged.emit( {
        action: 'start',
        data: data
      } );
    });
  }

  ngOnInit() {
    this.options = new NgUploaderOptions({
      url              : this.cable_api,
      fieldName        : this.fieldName,
      autoUpload       : true,
      calculateSpeed   : true,
      filterExtensions : true,
      allowedExtensions: ['jpg', 'png']
    });
  }

}