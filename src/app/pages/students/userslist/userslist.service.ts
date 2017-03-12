import {Injectable} from '@angular/core'
import { Headers, Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserslistService {

  constructor(private http:Http) { }

  getData() {
    //noinspection TypeScriptUnresolvedFunction
    return this.http.get('http://localhost:3000/users/user_list')
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }
}
