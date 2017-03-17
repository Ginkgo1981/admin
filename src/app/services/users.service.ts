import {Injectable} from '@angular/core'
import { Headers, Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {

  constructor(private http:Http) { }

  getUsers(identity_type) {
    //noinspection TypeScriptUnresolvedFunction
    return this.http.get(`http://localhost:3000/users/list/${identity_type}`)
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }
  getUser(id:Number) {
    return this.http.get(`http://localhost:3000/users/${id}`)
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }

}
