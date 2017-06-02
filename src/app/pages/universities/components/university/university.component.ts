import { Component, OnInit, Input,ViewChild, TemplateRef} from '@angular/core'
import { Router,ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import { UniversitiesService } from "../../../../services/universities.service";
import { University} from "../../../../models/university";
import { Major} from "../../../../models/majors";
import { DatatableComponent} from '@swimlane/ngx-datatable'
import { StudentsService} from "../../../../services/students.service.ts";
import { User} from "../../../../models/user";
import { DsinService} from "../../../../services/dsin.service";
import { DrawerComponent, DrawerService, NotificationService } from '@swimlane/ngx-ui';
import {MemberService} from "../../../../services/member.service";
@Component({
  selector: 'university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss'],

})
export class UniversityComponent implements OnInit {

  constructor(
      private route:ActivatedRoute,
              private location:Location,
              private _university_service:UniversitiesService,
              private _users_service:StudentsService,
              private _dsin_service:DsinService,
              private drawerMngr:DrawerService,
              private notificationService:NotificationService,
              private _member_service: MemberService
  ) {
  }

  @ViewChild('editUniversityTmpl') editUniversityTmpl:TemplateRef<any>;
  @ViewChild('editMajorTmpl') editMajorTmpl:TemplateRef<any>;
  @ViewChild('showStudentTmpl') showStudentTmpl:TemplateRef<any>;
  @ViewChild('imageUploaderTmpl') imageUploaderTmpl:TemplateRef<any>;

  universityDrawer:DrawerService;
  imagesUploaderDrawer:DrawerService;
  majorDrawer:DrawerComponent;

  university:University
  major:Major;

  students:Array<User>;
  //majors = [];

  temp = [];
  selected = [];
  @ViewChild(DatatableComponent) table:DatatableComponent;

  ngOnInit():void {
    let dsin = this.route.params['value']['dsin'] || this._member_service.getMember().identity.university.dsin;
    console.debug("[university-component] ngOnInit dsin: %o", dsin);
    this.load_university(dsin);
    //this.load_majors(dsin);
  }

  load_university(dsin:String) {
    this._dsin_service.get_by_dsin(dsin).then(res => {
          console.debug("[university-component] load_university dsin: %o, res: %o", dsin,res);
          this.university = res.university;
        }
    );
  }


  onSelect({ selected }) {
    console.debug("[university-component] onSelect selected: o%", selected);
    this.major = selected[0];
    this.openMajorDrawer();
  }

  //on update callback
  onUpdateSucc(event) {
    console.debug("[university-component] onUpdateSucc event: %o", event);
    if (event === 'update_university_succ') {
      setTimeout(() => {
        this.drawerMngr.destroy(this.universityDrawer);
        this.showNotification('学校基本信息更新成功');
      }, 1000)
    } else if (event == 'update_major_succ') {
      setTimeout(() => {
        this.drawerMngr.destroy(this.majorDrawer);
        this.showNotification('专业信息更新成功');
      }, 1000)
    }
  }

  showNotification(body:String) {
    this.notificationService.create({
      title: '信息更新提示!',
      body: body,
      styleType: 'success',
      timeout: 10000,
      rateLimit: false
    })
  }


  //Drawer
  openImageUploaderDrawer(e) {
    console.debug("[university-component] openImageUploaderDrawer e: %o", e)
    this.imagesUploaderDrawer = this.openDrawer(this.imageUploaderTmpl)
  }

  openUniverityDrawer() {
    this.universityDrawer = this.openDrawer(this.editUniversityTmpl)
  }

  openMajorDrawer() {
    this.majorDrawer = this.openDrawer(this.editMajorTmpl)
  }

  closeUniversityDrawer() {
    this.drawerMngr.destroy(this.universityDrawer)
  }

  closeMajorDrawer() {
    this.drawerMngr.destroy(this.majorDrawer)
  }

  openDrawer(template) {
    return this.drawerMngr.create({
      direction: 'left',
      template,
      size: 40,
      context: ''
    });
  }


  onImageUploaded(e){
    console.debug("[university-component] onImageUploaded: %o", e)
    if(e.action === 'end'){
    }
  }
}
