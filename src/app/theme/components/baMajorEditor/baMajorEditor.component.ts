import {Component, ViewChild, Input, Output, ElementRef, EventEmitter, OnInit} from '@angular/core';
import {MessagesService} from "../../../services/messages.service";
import { ModalDirective } from 'ng2-bootstrap';
import {Attachment} from "../../../models/attachment";
import {User} from "../../../models/user";
import {UsersService} from "../../../services/users.service";
import {Student} from "../../../models/student";
import {Major} from "../../../models/majors";
import {DsinService} from "../../../services/dsin.service";

@Component({
  selector: 'ba-major-editor',
  styleUrls: ['./baMajorEditor.scss'],
  templateUrl: './baMajorEditor.html'
})

export class BaMajorEditor implements OnInit {

  @Input()major: Major;
  @Output() updatedSucc = new EventEmitter<any>();
  constructor(private _service: DsinService){
  }

  ngOnInit():void {
  }

  update(event) {
    this._service.update_dsin(this.major.dsin, this.major).then(res => {
      this.updatedSucc.emit('update_major_succ')
    })
  }
}