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

  update_dsin(dsin:String, entity:any){
    let headers = new Headers({'Content-Type': 'application/json', 'token': '123456789'});
    return this.http.post(`${this.dsin_api}/${dsin}`, JSON.stringify({entity:entity}), {headers: headers})
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }

  get_tags(dsin: String) {
    return this.http.get(`${this.dsin_api}/${dsin}/tags`)
        .toPromise()
        .then((response) => {
          return response.json();
        });

  }

  add_tag(dsin: String, name: String){
    let headers = new Headers({'Content-Type': 'application/json', 'token': '123456789'});
    return this.http.post(`${this.dsin_api}/${dsin}/tag`, JSON.stringify({name:name}), {headers: headers})
        .toPromise()
        .then((response) => {
          return response.json();
        });

  }

  delete_tag(dsin: String) {
    let headers = new Headers({'Content-Type': 'application/json', 'token': '123456789'});
    return this.http.delete(`${this.dsin_api}/${dsin}`)
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }
}