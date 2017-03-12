import {StudentsService} from '../../../../services/students.service'
import { Component, OnInit, Input,ViewChild} from '@angular/core'
import { ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';



@Component({
  selector: 'student',
  templateUrl: './student.html',
  styleUrls: ['./student.scss'],

})
export class StudentComponent implements OnInit {
  @ViewChild('lgModal') lgModal: ModalDirective;

  @Input()
  user:any

  @Input()
  message: String

  constructor(private route:ActivatedRoute,
              private location:Location,
              private _service:StudentsService) {
  }

  ngOnInit():void {

    this.message = '';
    this.route.params.forEach((params:Params) => {
      let id = +params['id'];
      console.log("====== user id: " + id)

      this._service.getStudent(id).then(res => {
            this.user = res['data']['user']
        console.log(" ===user info ==== %o", this.user)
          }
      )
    });
  }

  sendMessage(e): void {
    console.log("======= e ======%o", e)
    //this._service.sendMessage(this.user.id, this.message)
    this.lgModal.hide();
  }


  showChildModal(): void {
    this.lgModal.show();
  }

  hideChildModal(): void {
    console.log('===== hideChildModal ===== %o', this.user)

    this.lgModal.hide();
  }


}