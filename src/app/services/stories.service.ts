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

  getStories() {
    let headers = new Headers({'Content-Type': 'application/json', 'token': this._member_service.getMember().token});
    return this.http.get(`${this.story_api}/list/`, {headers:headers})
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }

  getStory(id:string) {
    let headers = new Headers({'Content-Type': 'application/json', 'token': this._member_service.getMember().token});
    return this.http.get(`${this.story_api}/get_story/${id}`, {headers:headers})
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }

  updateStory(id: string, story: Story) {
    let headers = new Headers({'Content-Type': 'application/json', 'token': this._member_service.getMember().token});
    return this.http.post(`${this.story_api}/update_story/${id}`, JSON.stringify({story:story}), {headers: headers})
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }

  deleteStory(id: string){
    let headers = new Headers({'Content-Type': 'application/json', 'token': this._member_service.getMember().token});
    return this.http.post(`${this.story_api}/delete_story/${id}`,{},  {headers: headers})
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }

  createStory(story:Story) {
    let headers = new Headers({'Content-Type': 'application/json', 'token': this._member_service.getMember().token});
    return this.http.post(`${this.story_api}/create_story`, JSON.stringify({story: story}), {headers: headers})
        .toPromise()
        .then((response) => {
          return response.json();
        });
  }
}