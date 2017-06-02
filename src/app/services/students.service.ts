import {Injectable} from '@angular/core'
import { Headers, Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {GlobalDataService} from "./globle-data.service";
import {MemberService} from "./member.service";

@Injectable()
export class StudentsService {

  constructor(private http:Http,
              private _member_service: MemberService
  ) {
  }

  students_api = GlobalDataService.students_api();
  get_student_list(dsin: string) {
    let headers = new Headers({'Content-Type': 'application/json', 'token': this._member_service.getMember().token});
    return this.http.get(`${this.students_api}/student_list/${dsin}`, {headers: headers})
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }
}
