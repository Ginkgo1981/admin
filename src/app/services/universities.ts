import {Injectable} from '@angular/core'
import { Headers, Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UniversitiesService {

  constructor(private http:Http) {
  }

  getList() {
    return this.http.get('http://localhost:3000/universities/list')
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }

}
