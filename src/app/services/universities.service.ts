import {Injectable} from '@angular/core'
import { Headers, Http, URLSearchParams } from '@angular/http';
import {GlobalDataService} from "./globle-data.service";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UniversitiesService {

  base_api = `${GlobalDataService.getCable_api()}/universities`;
  constructor(private http:Http) {
  }

  getList() {
    return this.http.get(`${this.base_api}/list`)
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }

  getUniversity(id: Number){
    return this.http.get(`${this.base_api}/` + id)
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }

}
