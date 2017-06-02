import {Component, OnInit,ViewChild, Input, Output, ElementRef, EventEmitter} from '@angular/core';
import { Router,ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import { DatatableComponent } from '@swimlane/ngx-datatable'
import {CampaignsService} from "../../../../services/campaigns.service";
import {MemberService} from "../../../../services/member.service";

@Component({
  selector: 'campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss'],

})
export class CampaignListComponent implements OnInit {

  @ViewChild(DatatableComponent) table:DatatableComponent;

  university_dsin:String;
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
    this.university_dsin = this.route.params['value']['university_dsin'] || this._member_service.getMember().identity.university.dsin;
    console.debug("[campaign-list] onInit university_dsin: %o", this.university_dsin);
    this.page(this.university_dsin, this.offset, this.limit)
  }

  page(university_dsin,offset = 0, limit = 10) {
    this._campaign_service.get_campaigns(university_dsin).then(res => {
      console.debug("[campaign-list] getCampaignList: res: %o", res);
      let results = res.campaigns
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
    console.debug("[campaign-list] onActivate e: %o", e)
    let campaign = e.row;
    this.router.navigate(['/pages/campaigns/', campaign.dsin]);
  }

}