import { Injectable } from '@angular/core'
import { Headers, Http, URLSearchParams } from '@angular/http';
import { Story } from '../models'
import {GlobalDataService} from "./globle-data.service";
import 'rxjs/add/operator/toPromise';
import {MemberService} from "./member.service";

@Injectable()
export class StoriesService {
  story_api = GlobalDataService.stories_api();

  constructor(private http:Http,
              private _member_service:MemberService) {
  }

  getStories(university_dsin: String) {
    let headers = new Headers({'Content-Type': 'application/json', 'token': this._member_service.getMember().token});
    return this.http.get(`${this.story_api}/list/${university_dsin}`, {headers:headers})
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }

  createStory(story:Story) {
    let headers = new Headers({'Content-Type': 'application/json', 'token': this._member_service.getMember().token});
    let data = {
      title: story.title,
      content: story.content
    }
    return this.http.post(`${this.story_api}/create_story`, JSON.stringify(data), {headers: headers})
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }

}