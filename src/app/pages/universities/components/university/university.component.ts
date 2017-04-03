import { Component, OnInit, Input,ViewChild} from '@angular/core'
import { Router,ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import { UniversitiesService } from "../../../../services/universities.service";
import { University} from "../../../../models/university";
import { Major} from "../../../../models/majors";
import { DatatableComponent} from '@swimlane/ngx-datatable'
import { UsersService} from "../../../../services/users.service";
import { User} from "../../../../models/user";
import { DsinService} from "../../../../services/dsin.service";
import { DrawerService, NotificationService } from '@swimlane/ngx-ui'
@Component({
  selector: 'university',
  templateUrl: './university.html',
  styleUrls: ['./university.scss'],

})
export class UniversityComponent implements OnInit {

  constructor(private route:ActivatedRoute,
              private location:Location,
              private _university_service:UniversitiesService,
              private _users_service:UsersService,
              private _dsin_service:DsinService,
              private drawerMngr:DrawerService,
              private notificationService:NotificationService) {
  }

  @ViewChild('editUniversityTmpl') editUniversityTmpl:TemplateRef<any>;
  @ViewChild('editMajorTmpl') editMajorTmpl:TemplateRef<any>;
  @ViewChild('showStudentTmpl') showStudentTmpl:TemplateRef<any>;

  universityDrawer:DrawerService;
  majorDrawer:DrawerComponent;

  university:University
  major:Major;

  students:Array<User>;
  majors = [];

  temp = [];
  selected = [];
  columns = [
    {prop: 'name'},
    {name: 'id'},
    {name: 'code'}
  ];
  @ViewChild(DatatableComponent) table:DatatableComponent;

  ngOnInit():void {
    let dsin = this.route.params.value.dsin;
    this.load_university(dsin);
    this.load_majors(dsin);
  }

  load_university(dsin:String) {
    this._dsin_service.get_by_dsin(dsin).then(res => {
          console.log("res==== %o", res)
          this.university = res['university']
        }
    );
  }

  load_majors(dsin:String) {
    this._university_service.getMajorList(dsin).then(
        res => {
          this.majors = res['majors']
          console.log("res[majors] ===== %o", res['majors'])
          //Object {id: 62564, dsin: "tjWCE3WvvG9Kb6mZe-kkXQ", code: "050212", name: "印度尼西亚语"}
          //this.rows = [...res.data.majors]
          //this.temp = [...res.data.majors]
          //console.log("===== university: %o", this.university)
        }
    )
  }


  //major table
  updateFilter(event) {
    const val = event.target.value;
    console.log("==== event %o", val)
    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.rows = temp;
  }

  onSelect({ selected }) {
    this.major = selected[0];
    this.openMajorDrawer();
    //this.router.navigate(['/pages/universities/university-list/', selected[0]['id']]);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }


  //on update callback
  onUpdateSucc(event) {
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
  openUniverityDrawer(temp) {
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

}
