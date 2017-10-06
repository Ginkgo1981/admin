import {Component, ViewChild, Input, Output, ElementRef, EventEmitter, OnInit} from '@angular/core';
import {MessagesService} from "../../../services/messages.service";
import { ModalDirective } from 'ng2-bootstrap';
import {Attachment} from "../../../models/attachment";
import {User} from "../../../models/user";
import {StudentsService} from "../../../services/students.service";
import {Student} from "../../../models/student";
import {DsinService} from "../../../services/dsin.service";
import {Job} from "../../../models/jobs";
import {JobsService} from "../../../services/jobs.service";

@Component({
  selector: 'ba-job-editor',
  styleUrls: ['./ba-job-editor.component.scss'],
  templateUrl: './ba-job-editor.component.html'
})

export class BaJobEditor implements OnInit {

  @Input() job:Job
  @Output() updatedSucc = new EventEmitter<any>();

  constructor(private _service: JobsService){
  }

  ngOnInit():void {
  }

  onUpdate(e) {
    console.debug("[ba-job-editor] onUpdate job: %o", this.job)
    this._service.update(this.job).then(res => {
      console.debug("[ba-job-editor] update res: %o", res);
      this.updatedSucc.emit('update_job_succ')
    })
    //this._service.update_dsin(this.university.dsin, this.university).then(res => {
    //})
  }

}