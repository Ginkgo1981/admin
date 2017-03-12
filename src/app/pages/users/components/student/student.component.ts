import { Component, OnInit, Input,ViewChild,ViewChildren, OnDestroy} from '@angular/core'
import { ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import { Student } from '../../../../models'
import { StudentsService } from '../../../../services'

@Component({
  selector: 'student',
  templateUrl: './student.html',
  styleUrls: ['./student.scss'],

})
export class StudentComponent implements OnInit, OnDestroy {
  @ViewChild('pointmessage') pointmessage;
      //: ModalDirective;



  @Input()
  student:Student

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
            this.student = res['data']['user']
        console.log(" ===user info ==== %o", this.student)
          }
      )
    });
  }

  sendMessage(e): void {
    console.log("======= e ======%o", e)
    //this._service.sendMessage(this.student.id, this.message)
    this.lgModal.hide();
  }


  showChildModal(): void {
    console.info("===== showChildModal ===== %o", this.lgModal)
    this.pointmessage.hello()
    //this.lgModal.show();
  }

  hideChildModal(): void {
    console.log('===== hideChildModal ===== %o', this.student)

    this.lgModal.hide();
  }

  ngOnDestroy():void {
    console.log("========== StudentComponent ngOnDestroy ======")
  }

}