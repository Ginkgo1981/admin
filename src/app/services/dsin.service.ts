import {Injectable} from '@angular/core'
import { Headers, Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {GlobalDataService} from "./globle-data.service";

@Injectable()
export class DsinService {

  constructor(private http:Http) {
  }

  dsin_api = GlobalDataService.dsin_api();

  get_by_dsin(dsin:String) {
    return this.http.get(`${this.dsin_api}/${dsin}`)
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }
}