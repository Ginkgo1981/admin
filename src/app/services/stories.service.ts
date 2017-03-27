import { Injectable } from '@angular/core'
import { Headers, Http, URLSearchParams } from '@angular/http';
import { Story } from '../models'
import {GlobalDataService} from "./globle-data.service";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StoriesService {


  base_api = `${GlobalDataService.getCable_api()}/stories`;
  constructor(private http:Http) { }

  getStories() {
    //noinspection TypeScriptUnresolvedFunction
    return this.http.get(`${this.base_api}/list`)
        .toPromise()
        .then((response) => {
          console.log('===== stories services getData: %o', response)
          return response.json();
        });
  }

  getStory(id:Number) {

  }


  createStory(story:Story) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let data = {
      title: story.title,
      content: story.content
    }
    console.log("send_message: data: %o", data)
    return this.http.post(`${this.base_api}/create_story`, JSON.stringify(data), {headers: headers})
        .toPromise()
        .then((response) => {
          console.log("==== create story ===== %o", response)
          return response.json();
        });

  }


}