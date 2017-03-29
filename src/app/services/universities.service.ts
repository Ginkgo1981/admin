import {Injectable} from '@angular/core'
import { Headers, Http, URLSearchParams } from '@angular/http';
import {GlobalDataService} from "./globle-data.service";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UniversitiesService {

  constructor(private http:Http) {
  }

  universities_api = GlobalDataService.universities_api()


  getList() {
    return this.http.get(`${this.universities_api}/list`)
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }

  getUniversity(id: Number){
    return this.http.get(`${this.universities_api}/` + id)
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }

}
