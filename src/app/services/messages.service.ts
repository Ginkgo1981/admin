import {Injectable} from '@angular/core'
import { Headers, Http, URLSearchParams } from '@angular/http';
import {GlobalDataService} from '../../../services/globle-data.service'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MessagesService {
  base_api:String;
  constructor(private http:Http,
              private globalDataService:GlobalDataService) {
    this.base_api = `${globalDataService.cable_api}/users`
  }



  sendMessage(receiver_id:Number, message:String) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let data = {
      receiver_id: receiver_id,
      message: message
    }
    console.log("send_message: data: %o", data)
    return this.http.post(`${this.base_api}/send_point_message`, JSON.stringify(data), {headers: headers})
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }
}