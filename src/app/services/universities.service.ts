import {Injectable} from '@angular/core'
import { Headers, Http, URLSearchParams } from '@angular/http';
import {GlobalDataService} from "./globle-data.service";
import 'rxjs/add/operator/toPromise';
import {University} from "../models/university";

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

  getMajorList(dsin: String) {
    return this.http.get(`${this.universities_api}/${dsin}/major_list`)
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }
}
