import {Injectable} from '@angular/core'
import { Headers, Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {GlobalDataService} from "./globle-data.service";
import {MemberService} from "./member.service";

@Injectable()
export class StudentsService {

  constructor(private http:Http,
              private _member_service:MemberService) {
  }

  api = GlobalDataService.cable_api;

  get_student_list(dsin:string) {
    let headers = new Headers({'Content-Type': 'application/json', 'token': this._member_service.getMember().token});
    return this.http.get(`${this.api}/users/students`, {headers: headers})
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }

  getStudent(id:string) {
    let headers = new Headers({'Content-Type': 'application/json', 'token': this._member_service.getMember().token});
    console.debug("[student-service] getStudent id: %o, headers", id, headers);
    return this.http.get(`${this.api}/users/students/${id}`, {headers: headers})
        .toPromise()
        .then((response) => {
          console.debug("[student-service] getStudent res: %o", response.json())
          return response.json();
        })
  }
}
