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

  @Input()
  student:Student


  constructor(private route:ActivatedRoute,
              private location:Location,
              private _service:StudentsService) {
  }

  ngOnInit():void {

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



  showChildModal(): void {
    this.pointmessage.showChildModal()
  }

  ngOnDestroy():void {
    console.log("========== StudentComponent ngOnDestroy ======")
  }

}