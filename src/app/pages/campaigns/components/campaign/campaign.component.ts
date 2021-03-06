import {Component, OnInit,ViewChild, Input, Output, ElementRef, EventEmitter} from '@angular/core';
import { Router,ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import { DatatableComponent } from '@swimlane/ngx-datatable'
import {CampaignsService} from "../../../../services/campaigns.service";
import {MemberService} from "../../../../services/member.service";


@Component({
  selector: 'campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss'],

})
export class CampaignComponent implements OnInit {


  @ViewChild(DatatableComponent) table:DatatableComponent;

  campaign_dsin:String;
  rows = [];
  count:number = 0;
  offset:number = 0;
  limit:number = 10;
  selected = [];

  constructor(private _campaign_service: CampaignsService,
              private router:Router,
              private route:ActivatedRoute,
              private _member_service: MemberService) {
  }

  ngOnInit():void {
    this.campaign_dsin = this.route.params['value']['campaign_dsin'];
    console.debug("[campaign-component] onInit campaign_dsin: %o", this.campaign_dsin);
    this.page(this.campaign_dsin, this.offset, this.limit)
  }

  page(campaign_dsin,offset = 0, limit = 10) {
    this._campaign_service.get_skycodes(campaign_dsin).then(res => {
      console.debug("[campaign-list] get_skycodes: res: %o", res);
      let results = res.skycodes
      this.count = 1000;
      const start = offset * limit;
      const end = start + limit;
      const rows = [...this.rows];
      for (let i = start; i < end; i++) {
        rows[i] = results[i];
      }
      this.rows = rows;
    } )
  }
  onActivate(e) {
    console.debug("[campaign-component] onActivate e: %o", e)
    let skycode = e.row
    this.router.navigate(['/pages/campaigns/skycode', skycode.dsin]);
  }
}