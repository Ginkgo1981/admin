import { Component, OnInit, Input,ViewChild} from '@angular/core'
import { Router,ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';

@Component({
  selector: 'campaignList',
  templateUrl: './campaignList.html',
  styleUrls: ['./campaignList.scss'],

})
export class CampaignListComponent implements OnInit {

  listOne: Array<string> = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];

  ngOnInit():void {

  }

  onDragSuccess(e){
    console.log("onDragSuccess: %o",e)
  }

  onDragStart(e){

    console.log("onDragStart: %o",e)
  }


  onDragOver(e){

    console.log("onDragOver: %o",e)
  }


  onDragEnd(e){

    console.log("onDragEnd: %o",e)
  }

  onDropSuccess(e){

    console.log("onDropSuccess: %o",e)
  }






}