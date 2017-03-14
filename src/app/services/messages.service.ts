import {Injectable} from '@angular/core'
import { Headers, Http, URLSearchParams } from '@angular/http';
//import {GlobalDataService} from '../../../services/globle-data.service'
import 'rxjs/add/operator/toPromise';
import {Attachment} from "../models/attachment";

@Injectable()
export class MessagesService {
  base_api:String;
  constructor(private http:Http ) {
    //this.base_api = `${globalDataService.cable_api}/users`
  }

  sendMessage(receiver_id:Number, message:String, attachment: Attachment) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let data = {
      receiver_id: receiver_id,
      message: message,
      attachment_id: attachment.attachment_id,
      attachment_type: attachment.attachment_type
    }
    console.log("send_message: data: %o", data)
    return this.http.post(`http://localhost:3000/messages/send_point_message`, JSON.stringify(data), {headers: headers})
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }

  getMessages() {
    //noinspection TypeScriptUnresolvedFunction
    return this.http.get('http://localhost:3000/messages/list')
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }

}