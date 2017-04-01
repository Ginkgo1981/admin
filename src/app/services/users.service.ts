import {Injectable} from '@angular/core'
import { Headers, Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {GlobalDataService} from "./globle-data.service";

@Injectable()
export class UsersService {

  constructor(private http:Http) {
  }

  users_api = GlobalDataService.users_api();
  get_student_list() {
    return this.http.get(`${this.users_api}/student_list`)
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }
}
