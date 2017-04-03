import {Component, ViewChild, Input, Output, ElementRef, EventEmitter, OnInit} from '@angular/core';
import {MessagesService} from "../../../services/messages.service";
import { ModalDirective } from 'ng2-bootstrap';
import {Attachment} from "../../../models/attachment";
import {User} from "../../../models/user";
import {UsersService} from "../../../services/users.service";
import {Student} from "../../../models/student";
import {DsinService} from "../../../services/dsin.service";

@Component({
  selector: 'ba-university-editor',
  styleUrls: ['./baUniversityEditor.scss'],
  templateUrl: './baUniversityEditor.html'
})

export class BaUniversityEditor implements OnInit {

  @Input() university:University
  @Output() updatedSucc = new EventEmitter<any>();

  constructor(private _service: DsinService){
  }
  //
  ngOnInit():void {
    console.log("===== university ==== %o", this.university)
  }


  update(evetn) {
    console.log("==== university %o", this.university)
    this._service.update_dsin(this.university.dsin, this.university).then(res => {
      this.updatedSucc.emit('update_university_succ')
    })
  }

}