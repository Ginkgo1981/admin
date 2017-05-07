import { Component, OnInit,ViewChild, Input, Output, ElementRef, EventEmitter} from '@angular/core';
import { Message} from "../../../models/message";
import { DatatableComponent} from '@swimlane/ngx-datatable'
import { MessagesService} from "../../../services/messages.service";
import { UniversitiesService} from "../../../services/universities.service";
import { Router,ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { StoriesService} from "../../../services/stories.service";

@Component({
  selector: 'ba-story-list',
  templateUrl: './ba-story-list.component.html',
  styleUrls: ['./ba-story-list.component.scss']
})
export class BaStoryList implements OnInit {
  @Input() university_dsin:String;
  @Input() columns: Array<string> = ['id', 'title', 'edit', 'delete', 'choose'];
  @Output() onActivateChanged = new EventEmitter();
  @ViewChild(DatatableComponent) table:DatatableComponent;
  constructor(private _story_service:StoriesService,
              private router: Router
  ) {
  }

  rows = [];
  count:number = 0;
  offset:number = 0;
  limit:number = 10;
  selected = [];


  ngOnInit():void {
    this.count = 10;
    this.page(this.offset, this.limit)
    console.debug("[ba-story-list] onInit dsin: %o, columns: %o", this.university_dsin, this.columns)
  }

  page(offset = 0, limit = 10) {
    this._story_service.getStories(this.university_dsin).then(res => {
          console.debug("[ba-story-list] getStories university_dsin: %o, res: %o", this.university_dsin, res)
          let results = res.stories
          this.count = 1000;
          const start = offset * limit;
          const end = start + limit;
          const rows = [...this.rows];
          for (let i = start; i < end; i++) {
            rows[i] = results[i];
          }
          this.rows = rows;
        }
    )
    console.debug("[ba-story-list] page offset: %o, limit: %o", this.offset, this.limit)
  }

  onPage(event) {
    console.debug("[ba-story-list] onPage event:", event);
    this.page(event.offset, event.limit);
  }

  onActivate({row: story, column}) {
    console.debug("[ba-story-list] onActivate major: %o column: %o",story, column );
    this.onActivateChanged.emit({
      action: column.name,
      data: story
    })
  }

  onSelect({ selected }) {
    //console.log("[ba-major-list] onSelect selected: %o, this.selected: %o", selected, this.selected);
  }
}

