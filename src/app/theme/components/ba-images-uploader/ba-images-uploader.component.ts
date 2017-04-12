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

  options:NgUploaderOptions;
  response:any;
  previewData
  uptokens:Array<String>

  photos: Array<any>

  @Input() dsin;
  @Output() public onStateChanged = new EventEmitter();


  cable_api = 'http://upload.qiniu.com';
  fieldName = 'file';
  startUploadEvent:EventEmitter<string>;

  constructor(@Inject(NgZone) private zone:NgZone,
              private _dsin_service:DsinService) {
    console.log("===constructor  ==== ")
    this.startUploadEvent = new EventEmitter<string>();
  }


  startUpload() {
    this._dsin_service.get_uptoken().then(res => {
      console.log("==== uptoken: %o", res.uptoken)
      return res.uptoken
    }).then(uptoken => {
      this.options.data.token = uptoken;
      this.options.data.key = Date.now();
      this.startUploadEvent.emit("startUpload");
    })
  }

  //@HostBinding( 'class' ) get btn() {
  //  return 'btn btn-primary fileinput-button';
  //}

  handleUpload(data:any):void {
    setTimeout(() => {
      this.zone.run(() => {
        console.log("==== handleUpload zone =====")
        this.response = data;
        if (data && data.response) {
          console.log("******handleUpload: %o", data)
          this.response = JSON.parse(data.response);
          //save
          this.save_to_dsin(this.dsin, this.response.key);

          this.onStateChanged.emit({
            action: 'end',
            data: this.response
          });
        }
      });
    });
  }


  uploadStart(data:any):void {
    this.zone.run(() => {
      this.onStateChanged.emit({
        action: 'start',
        data: data
      });
    });
  }


  handlePreviewData(data:any) {
    this.previewData = data;
  }


  ngOnInit() {
    this.options = new NgUploaderOptions({
      url: this.cable_api,
      fieldName: this.fieldName,
      autoUpload: false,
      calculateSpeed: true,
      filterExtensions: true,
      allowedExtensions: ['jpg', 'png'],
      maxUploads: 1,
      previewUrl: true,
      data: {}
    });

    this._dsin_service.get_photos(this.dsin).then(res =>{
      console.log("get_photos: %o", res)
      this.photos = res.photos.map(photo => {
        photo.img_url = `http://oo57og2we.bkt.clouddn.com/${photo.key}`
        return photo
      })
    })
  }

  remove(photo){
    this.photos = this.photos.filter(p => {
          return photo.dsin == p.dsin ? false : true
        })
    this._dsin_service.remove(photo.dsin).then(res => {
      console.log("remove photo res: %o", res)
    })
  }

  save_to_dsin(dsin, photo_key){
    this._dsin_service.save_photo(this.dsin, photo_key).then(res => {
      console.log("==== save_photos: %o", res)
      this.photos = res.photos.map(photo => {
        photo.img_url = `http://oo57og2we.bkt.clouddn.com/${photo.key}`
        return photo
      })
      console.log("save_to_dsin: %o", this.photos)
    })
  }

}