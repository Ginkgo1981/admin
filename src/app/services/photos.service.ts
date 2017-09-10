import {Injectable} from '@angular/core'
import { Headers, Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {GlobalDataService} from "./globle-data.service";

@Injectable()
export class PhotosService {
  constructor(private http:Http) {
  }

  photos_api = GlobalDataService.photos_api();
  get_uptoken() {
    return this.http.get(`${this.photos_api}/uptoken`)
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }

  save_photo(photo_key){
    let headers = new Headers({'Content-Type': 'application/json', 'token': '123456789'});
    let data = { key: photo_key }
    return this.http.post(`${this.photos_api}/save_photo`, JSON.stringify(data), {headers: headers})
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }

  get_photos() {
    return this.http.get(`${this.photos_api}/get_photos`)
        .toPromise()
        .then((response) => {
          return response.json();
        });

  }
}