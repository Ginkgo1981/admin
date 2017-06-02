import { Injectable } from '@angular/core'
import { Headers, Http, URLSearchParams } from '@angular/http';
import { GlobalDataService } from "./globle-data.service";
import { Member } from "../models/member";
import { MemberService } from "./member.service";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CampaignsService {
  campaigns_api = GlobalDataService.campaigns_api();
  constructor(private http:Http,
              private _member_service:MemberService) {
  }

  get_campaigns(university_dsin){
    let headers = new Headers({'Content-Type': 'application/json', 'token': this._member_service.getMember().token});
    return this.http.get(`${this.campaigns_api}/campaign_list/${university_dsin}`, {headers: headers})
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }

  get_skycodes(campaign_dsin) {
    let headers = new Headers({'Content-Type': 'application/json', 'token': this._member_service.getMember().token});
    return this.http.get(`${this.campaigns_api}/skycode_list/${campaign_dsin}`, {headers: headers})
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }
}