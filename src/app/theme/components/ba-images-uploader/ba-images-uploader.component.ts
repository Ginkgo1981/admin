import { Component, ViewChild, Inject, NgZone, HostBinding,Input, Output, ElementRef, EventEmitter, OnInit} from '@angular/core';
import { MessagesService} from "../../../services/messages.service";
import { ModalDirective } from 'ng2-bootstrap';
import { Attachment} from "../../../models/attachment";
import { User} from "../../../models/user";
import { UsersService} from "../../../services/users.service";
import { Student} from "../../../models/student";
import { DsinService} from "../../../services/dsin.service";
import { NgUploaderOptions, UploadedFile, UploadRejected } from 'ngx-uploader';

@Component({
  selector: 'ba-images-uploader',
  styleUrls: ['./ba-images-uploader.component.scss'],
  templateUrl: './ba-images-uploader.component.html'
})

export class BaImagesUploader implements OnInit {

  options:NgUploaderOptions;
  response:any;
  previewData: any;
  photos: Array<any>

  @Input() dsin;
  @Output() public onStateChanged = new EventEmitter();


  qiniuApi = 'http://upload.qiniu.com';
  fieldName = 'file';
  startUploadEvent:EventEmitter<string> = new EventEmitter<string>();


  constructor(@Inject(NgZone) private zone:NgZone,
              private _dsin_service:DsinService) {
  }


  startUpload() {
    this._dsin_service.get_uptoken().then(res => {
      console.debug("[ba-images-uploader] get_uptoken res: %o", res)
      return res.uptoken
    }).then(uptoken => {
      this.options.data.token = uptoken;
      this.options.data.key = Date.now();
      this.startUploadEvent.emit("startUpload");
      console.debug("[ba-images-uploader] emit startUpload")
    })
  }

  //@HostBinding( 'class' ) get btn() {
  //  return 'btn btn-primary fileinput-button';
  //}

  handleUpload(data:any):void {
    setTimeout(() => {
      this.zone.run(() => {
        if (data && data.response) {
          console.debug("[ba-images-uploader] handleUpload data: %o", data)
          this.response = JSON.parse(data.response);
          //save
          this.save(this.dsin, this.response.key);

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
      url: this.qiniuApi,
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
      console.debug("[ba-images-uploaders] get_photos res: %o", res)
      this.photos = res.photos.map(photo => {
        photo.img_url = `http://oo57og2we.bkt.clouddn.com/${photo.key}`
        return photo
      })
    })
  }

  toggleImage(photo){
    console.debug("[ba-images-uploader] selectImage e: %o", photo)
    photo.selected = !photo.selected
    this.onStateChanged.emit({
      action: 'selected',
      data: photo.img_url
    })
  }

  remove(photo){
    this.photos = this.photos.filter(p => {
          return photo.dsin == p.dsin ? false : true
        })
    this._dsin_service.remove(photo.dsin).then(res => {
      console.debug("[ba-images-uploaders] remove photo: %o res: %o", photo, res)

    })
  }

  save(dsin, photo_key){
    this._dsin_service.save_photo(this.dsin, photo_key).then(res => {
      console.debug("[ba-images-uploader] save res: %o", res)
      this.photos = res.photos.map(photo => {
        photo.img_url = `http://oo57og2we.bkt.clouddn.com/${photo.key}`
        return photo
      })
    })
  }

}