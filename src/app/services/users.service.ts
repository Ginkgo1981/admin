import {Injectable} from '@angular/core'
import { Headers, Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {

  constructor(private http:Http) { }

  getStudents() {
    //noinspection TypeScriptUnresolvedFunction
    return this.http.get('http://localhost:3000/users/user_list')
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }

  getStudent(id:Number) {
    return this.http.get(`http://localhost:3000/users/${id}`)
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }

}
