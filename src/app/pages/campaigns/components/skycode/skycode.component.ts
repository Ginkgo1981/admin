import {Component, OnInit,ViewChild, Input, Output, ElementRef, EventEmitter} from '@angular/core';
import { Router,ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import { DatatableComponent } from '@swimlane/ngx-datatable'
import {CampaignsService} from "../../../../services/campaigns.service";
import {MemberService} from "../../../../services/member.service";
import {DsinService} from "../../../../services/dsin.service";


@Component({
  selector: 'skycode',
  templateUrl: './skycode.component.html',
  styleUrls: ['./skycode.component.scss'],

})
export class SkycodeComponent implements OnInit {

  skycode: any;
  skycode_dsin:String;
  constructor(private _campaign_service: CampaignsService,
              private router:Router,
              private route:ActivatedRoute,
              private _dsin_service: DsinService,
              private _member_service: MemberService) {
  }

  ngOnInit():void {
    this.skycode_dsin = this.route.params['value']['skycode_dsin'];
    console.debug("[skycode-component] onInit skycode_dsin: %o", this.skycode_dsin);
    this.get_skycode();
  }

  get_skycode(){
    this._dsin_service.get_by_dsin(this.skycode_dsin).then(res => {
      console.debug("[skycode-component] get_skycode res: %o", res)
      this.skycode = res.skycode;
    })
  }
}