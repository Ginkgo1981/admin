import {Component, ViewChild, Input, Output, ElementRef, EventEmitter, OnInit} from '@angular/core';
import {MessagesService} from "../../../services/messages.service";
import { ModalDirective } from 'ng2-bootstrap';
import {Attachment} from "../../../models/attachment";
import {User} from "../../../models/user";
import {UsersService} from "../../../services/users.service";

@Component({
  selector: 'ba-student-info',
  styleUrls: ['./baStudentInfo.scss'],
  templateUrl: './baStudentInfo.html'
})

export class BaStudentInfo implements OnInit {

  @Input()user: User;
  constructor(private _service: UsersService){

  }

  ngOnInit():void {

  }





}