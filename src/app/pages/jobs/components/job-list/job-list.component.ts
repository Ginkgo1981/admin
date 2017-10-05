import { Component, OnInit, Input,ViewChild} from '@angular/core'
import { Router,ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import {DatatableComponent} from '@swimlane/ngx-datatable'
import {MemberService} from "../../../../services/member.service";
import {JobsService} from "../../../../services/jobs.service";
import {Job} from "../../../../models/jobs";
import { DrawerService,DrawerComponent, OverlayService, NotificationService } from '@swimlane/ngx-ui';


@Component({
  selector: 'job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'],

})
export class JobListComponent implements OnInit {
  jobs: Array<Job>
  selected = [];
  columns = ['id','job_name'];


  rows = [];
  count:number = 0;
  offset:number = 0;
  limit:number = 10;
  imagesUploaderDrawer:DrawerService;

  @ViewChild('imageUploaderTmpl') imageUploaderTmpl;

  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(private router:Router,
              private _member_service:MemberService,
              private drawerMngr:DrawerService,
              private notificationService:NotificationService,
              private jobsService:JobsService) {
  }

  ngOnInit():void {
    this.count = 10;
    this.page(this.offset, this.limit)
    //console.debug("[ba-story-list] onInit dsin: %o, columns: %o", this.university_dsin, this.columns)
  }

  page(offset = 0, limit = 10) {
    this.jobsService.getJobs().then(res => {
          //console.debug("[ba-story-list] getStories university_dsin: %o, res: %o", this.university_dsin, res)
          let results = res.jobs
          this.count = 1000;
          const start = offset * limit;
          const end = start + limit;
          const rows = [...this.rows];
          for (let i = start; i < end; i++) {
            rows[i] = results[i];
          }
          this.rows = rows;
      console.debug("[job-list-component] rows: %o", this.rows)
        }
    )
  }

  onPage(event) {
    console.debug("[ba-story-list] onPage event:", event);
    this.page(event.offset, event.limit);
  }

  onActivate({row: job, column}) {
    console.debug("[ba-story-list] onActivate major: %o column: %o",job, column );
    //this.onActivateChanged.emit({
    //  action: column.name,
    //  data: story
    //})
    this.imagesUploaderDrawer = this.openDrawer(this.imageUploaderTmpl);

  }

  //openImageUploaderDrawer(e) {
  //  console.debug("[message-component] openImageUploaderDrawer e: %o", e);
  //  this.imagesUploaderDrawer = this.openDrawer(this.imageUploaderTmpl);
  //}


  openDrawer(template) {
    return this.drawerMngr.create({ direction: 'left', template, size: 40, context: '' });
  }




}