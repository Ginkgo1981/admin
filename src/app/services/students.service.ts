import {Injectable} from '@angular/core'
import { Headers, Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {GlobalDataService} from "./globle-data.service";

@Injectable()
export class UsersService {
  users_api = GlobalDataService.users_api();
  constructor(private http:Http) {}
  getUsers(identity_type) {
    //noinspection TypeScriptUnresolvedFunction
    return this.http.get(`${this.users_api}/list/${identity_type}`)
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }
}
