import { Component, OnInit, Input,ViewChild,ViewChildren, OnDestroy} from '@angular/core'
import { ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import { Student } from '../../../../../models'
import { StudentsService } from '../../../../../services'

@Component({
  selector: 'point-message',
  templateUrl: './pointMessage.html',
  styleUrls: ['./pointMessage.scss'],

})
export class PointMessageComponent implements OnInit, OnDestroy {
  @ViewChild('lgModal') lgModal: ModalDirective;


  @Input()
  student:Student


  ngOnInit():void {

    console.log(' === PointMessageComponent ngOnInit ===== %o', this.student)

  }



  hello(){
    console.log("==== hello ==== ")
    this.lgModal.show();

  }

  ngOnDestroy():void {

  }

}