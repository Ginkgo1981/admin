import {Injectable} from '@angular/core'
import { Headers, Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {GlobalDataService} from "./globle-data.service";

@Injectable()
export class UsersService {


  base_api = `${GlobalDataService.getCable_api()}/users`;

  constructor(private http:Http) {}

  getUsers(identity_type) {
    //noinspection TypeScriptUnresolvedFunction
    return this.http.get(`${this.base_api}/list/${identity_type}`)
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }
  getUser(id:Number) {
    return this.http.get(`${this.base_api}/${id}`)
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }

  getStudent(id:Number) {
    return this.http.get(`${this.base_api}/users/${id}`)
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }

}
