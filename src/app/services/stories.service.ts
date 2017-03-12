import { Injectable } from '@angular/core'
import { Headers, Http, URLSearchParams } from '@angular/http';
import { Story } from '../models'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StoriesService {

  constructor(private http:Http) { }

  getStories() {
    //noinspection TypeScriptUnresolvedFunction
    return this.http.get('http://localhost:3000/stories/list')
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
    return this.http.post('http://localhost:3000/stories/create_story', JSON.stringify(data), {headers: headers})
        .toPromise()
        .then((response) => {
          console.log("==== create story ===== %o", response)
          return response.json();
        });

  }


}