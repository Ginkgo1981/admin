import {Injectable} from '@angular/core'
import { Headers, Http, URLSearchParams } from '@angular/http';
import {GlobalDataService} from "./globle-data.service";
import 'rxjs/add/operator/toPromise';
import {Attachment} from "../models/attachment";
import {Member} from "../models/member";

@Injectable()
export class MemberService {

  member:Member;
  members_api = GlobalDataService.members_api();

  constructor(private http:Http) {
    this.member = new Member();
  }

  isLogin() {
    this.getMember() ? true : false
  }

  getMember() {
    if(!this.member.token){
      let member = JSON.parse(localStorage.getItem('member'));
      console.debug('[member-service] local storage member: %o',member);
      this.member = member;
    }
    return this.member;
  }

  authorization(openid:String, access_token:String, code:String, cell:String, sms_code:String) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let data = {
      code: code,
      cell: cell,
      sms_code: sms_code,
      openid: openid,
      access_token: access_token
    }

    return this.http.post(`${this.members_api}/wechat_open_authorization`, JSON.stringify(data), {headers: headers})
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }

  get_sms_code(cell:String) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let data = {
      cell: cell
    }
    return this.http.post(`${this.members_api}/send_sms_code`, JSON.stringify(data), {headers: headers})
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }
}

