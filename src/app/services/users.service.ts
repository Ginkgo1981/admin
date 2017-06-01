import {Injectable} from '@angular/core'
import { Headers, Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {GlobalDataService} from "./globle-data.service";
import {MemberService} from "./member.service";

@Injectable()
export class UsersService {

  constructor(private http:Http,
              private _member_service: MemberService
  ) {
  }

  users_api = GlobalDataService.users_api();
  get_student_list() {
    let headers = new Headers({'Content-Type': 'application/json', 'token': this._member_service.getMember().token});
    return this.http.get(`${this.users_api}/student_list`, {headers: headers})
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }
}
