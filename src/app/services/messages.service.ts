import {Injectable} from '@angular/core'
import { Headers, Http, URLSearchParams } from '@angular/http';
import {GlobalDataService} from "./globle-data.service";
import 'rxjs/add/operator/toPromise';
import {Attachment} from "../models/attachment";

@Injectable()
export class MessagesService {

  messages_api = GlobalDataService.messages_api();
  constructor(private http:Http ) {
  }

  sendMessage(sender_id, receiver_id, message_type: String, content:String, attachment: Attachment) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let data = {
      sender_id: sender_id,
      receiver_id: receiver_id,
      message_type: message_type,
      content: content,
      attachment_id: attachment.attachment_id,
      attachment_type: attachment.attachment_type
    }
    console.log("send_message: data: %o", data)
    return this.http.post(`${this.messages_api}/send_message`, JSON.stringify(data), {headers: headers})
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }

  getMessages(type: String) {
    return this.http.get(`${this.messages_api}/list/${type}`)
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }


  getOptions() {
    return this.http.get(`${this.messages_api}/load_options`)
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }
}