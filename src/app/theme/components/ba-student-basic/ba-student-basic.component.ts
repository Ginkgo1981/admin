import {Component, ViewChild, Input, Output, ElementRef, EventEmitter, OnInit} from '@angular/core';
import {MessagesService} from "../../../services/messages.service";
import { ModalDirective } from 'ng2-bootstrap';
import {Attachment} from "../../../models/attachment";
import {User} from "../../../models/user";
import {StudentsService} from "../../../services/students.service";
import {Student} from "../../../models/student";
import {DsinService} from "../../../services/dsin.service";

@Component({
  selector: 'ba-student-basic',
  styleUrls: ['./ba-student-basic.component.scss'],
  templateUrl: './ba-student-basic.component.html'
})

export class BaStudentBasic implements OnInit {

  @Input() student: Student;
  @Output() tagEvent = new EventEmitter<any>();

  tags :Array<any>
  constructor(private _service: DsinService){
  }

  ngOnInit():void {

    console.debug("[ba-student-basic] ngOnInit student: %o", this.student)
    //this.tags = this.student.tags.map(tag => ({value: tag.dsin, display:tag.name}))
  }

  onTagAdd(event){
    //this._service.add_tag(this.student.dsin, event.display).then(res => {
    //  this.student.tags.push(res['tag'])
    //  this.tags = this.student.tags.map(tag => ({value: tag.dsin, display:tag.name}))
    //  this.tagEvent.emit("add_tag_succ")
    //}
    //
    //)
  }
  onTagRemove(event){
    //this._service.remove(event.value).then(res => {
    //  this.tagEvent.emit("delete_tag_succ")
    //})
  }

}