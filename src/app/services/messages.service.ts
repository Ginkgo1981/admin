import {Injectable} from '@angular/core'
import { Headers, Http, URLSearchParams } from '@angular/http';
import {GlobalDataService} from "./globle-data.service";
import 'rxjs/add/operator/toPromise';
import {Attachment} from "../models/attachment";
import {Member} from "../models/member";
import {MemberService} from "./member.service";

@Injectable()
export class MessagesService {

  messages_api = GlobalDataService.messages_api();

  constructor(private http:Http,
              private _member_service:MemberService) {
  }


  sendNotificationMessage(content:String,  attachment_ids:Array<any>) {
    let headers = new Headers({'Content-Type': 'application/json', 'token': this._member_service.getMember().token});
    let data = {
      content: content,
      attachment_ids: attachment_ids
    }
    console.debug("[message-service] sendNotificationMessage data:%o", data);
    return this.http.post(`${this.messages_api}/send_notification_message`, JSON.stringify(data), {headers: headers})
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }


  getMessages() {
    let headers = new Headers({'Content-Type': 'application/json', 'token': this._member_service.getMember().token});
    let data = {};
    return this.http.post(`${this.messages_api}/notification_message_list`, JSON.stringify(data), {headers: headers})
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }

  //getOptions() {
  //  return this.http.get(`${this.messages_api}/load_options`)
  //      .toPromise()
  //      .then((response) => {
  //        return response.json();
  //      });
  //}

  getReceivedMessagesByDsin(dsin:String) {
    return this.http.get(`${this.messages_api}/${dsin}/received_messages`)
        .toPromise()
        .then((response) => {
          return response.json();
        });

  }

  getSendedMessagesByDsin(dsin:String) {
    return this.http.get(`${this.messages_api}/${dsin}/sended_messages`)
        .toPromise()
        .then((response) => {
          return response.json();
        });

  }


}