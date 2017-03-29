import {Component, ViewChild, Input, Output, ElementRef, EventEmitter, OnInit} from '@angular/core';
import {MessagesService} from "../../../services/messages.service";
import { ModalDirective } from 'ng2-bootstrap';
import {Attachment} from "../../../models/attachment";
import {User} from "../../../models/user";
import {UsersService} from "../../../services/users.service";
import {Student} from "../../../models/student";

@Component({
  selector: 'ba-student-info',
  styleUrls: ['./baStudentInfo.scss'],
  templateUrl: './baStudentInfo.html'
})

export class BaStudentInfo implements OnInit {

  @Input()student: Student;

  itemsAsObjects = [{value: 0, display: 'Angular'}, {value: 1, display: 'React'}];


  constructor(private _service: UsersService){
    console.log("===== student ==== %o", this.student)
  }

  ngOnInit():void {

    console.log("===== student ==== %o", this.student)
  }


  onTagAdd(event){

    console.log("===== onTagAdd ==== %o", event)

  }


  onTagRemove(event){

    console.log("=====onTagRemove ==== %o", event)

  }





}