import { Component, OnInit, Input,ViewChild} from '@angular/core'
import { Router,ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import { UniversitiesService } from "../../../../services/universities.service";
import { University} from "../../../../models/university";
import { DatatableComponent} from '@swimlane/ngx-datatable'
import { MemberService} from "../../../../services/member.service";
import { FormBuilder, Validators } from '@angular/forms';
import { DrawerService, NotificationService } from '@swimlane/ngx-ui';
import { Member} from "../../../../models/member";
import {DsinService} from "../../../../services/dsin.service";

@Component({
  selector: 'job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],

})
export class JobComponent implements OnInit {

  //major_dsin: String;
  //university_dsin:String;
  //imagesUploaderDrawer:DrawerService;
  //
  //public major_form = this.fb.group({
  //  name: ["", Validators.required],
  //  content: ["", Validators.required]
  //});
  //@ViewChild('imageUploaderTmpl') imageUploaderTmpl;
  constructor(
              private fb:FormBuilder,
              private router:Router,
              private route:ActivatedRoute,
              private _member_service: MemberService,
              private _dsin_service: DsinService,
              private drawerMngr:DrawerService,
              private notificationService:NotificationService,
              private _service:UniversitiesService) {
  }

  ngOnInit():void {
    //this.major_dsin = this.route.params['value']['major_dsin'];
    //this.university_dsin = this.route.params['value']['university_dsin'];
    //if(!this.university_dsin){
    //  this.university_dsin = this._member_service.getMember().identity.university.dsin;
    //}
    //console.debug("[job-component] ngOnInit major_dsin:%o, university_dsin:%o", this.major_dsin, this.university_dsin);
    //this.load_major(this.major_dsin);
  }

  //load_major(major_dsin: String){
  //  this._dsin_service.get_by_dsin(major_dsin).then(res => {
  //    console.debug("[job-component] load_major major_dsin: %o, res: %o", major_dsin, res.major.name)
  //    let major = res.major;
  //    this.major_form.controls['name'].setValue(major.name);
  //    this.major_form.controls['content'].patchValue(major.content);
  //  })
  //}
  //
  //update_major(e) {
  //  let major = this.major_form.value;
  //  this._dsin_service.update_dsin(this.major_dsin, major).then(res => {
  //    console.debug("[job-component] update_major dsin: %o, job: %o, res: %o", this.major_dsin, major, res);
  //    this.showNotification('专业图文更新成功');
  //  })
  //}
  //
  //openImageUploaderDrawer(e) {
  //  console.debug("[story-component] openImageUploaderDrawer e: %o", e)
  //  this.imagesUploaderDrawer = this.openDrawer(this.imageUploaderTmpl)
  //}
  //
  //patchValue() {
  //  this.major_form.controls['content'].patchValue(`${this.major_form.controls['content'].value} <img width="300px" src="http://mvimg1.meitudata.com/56385ed7325a06330.jpg"/>`)
  //}
  //
  //openDrawer(template) {
  //  return this.drawerMngr.create({
  //    direction: 'left',
  //    template,
  //    size: 40,
  //    context: ''
  //  });
  //}
  //
  //
  //onPhotoSelected(e){
  //  console.debug("[job-component] onPhotoSelected e: %o",e )
  //  if(e.action === 'selected'){
  //    this.major_form.controls['content'].patchValue(`${this.major_form.controls['content'].value}
  //    <img width="300px" src="${e.data}"/>`)
  //  }
  //}
  //
  //
  //showNotification(body:String) {
  //  this.notificationService.create({
  //    title: '信息更新提示!',
  //    body: body,
  //    styleType: 'success',
  //    timeout: 10000,
  //    rateLimit: false
  //  })
  //}


}