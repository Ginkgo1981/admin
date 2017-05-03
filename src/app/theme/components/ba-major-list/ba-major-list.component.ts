import {Component, OnInit,ViewChild, Input, Output, ElementRef, EventEmitter} from '@angular/core';
import {Message} from "../../../models/message";
import {DatatableComponent} from '@swimlane/ngx-datatable'
import {MessagesService} from "../../../services/messages.service";
import {UniversitiesService} from "../../../services/universities.service";

@Component({
  selector: 'ba-majors-list',
  templateUrl: './ba-major-list.component.html',
  styleUrls: ['./ba-major-list.component.scss']
})
export class BaMajorList implements OnInit {
  @Input() dsin:String;
  @ViewChild(DatatableComponent) table:DatatableComponent;
  constructor(private _service:UniversitiesService) {
  }

  rows = [];
  count:number = 0;
  offset:number = 0;
  limit:number = 10;
  selected = [];

  ngOnInit():void {
    this.count = 10;
    this.page(this.offset, this.limit)
    console.debug("[ba-major-list] onInit dsin: %o", this.dsin)
  }

  page(offset = 0, limit = 10) {
    this._service.getMajorList(this.dsin).then(res => {
          console.debug("[ba-major-list] getMajorList res: %o", res)
          let results = res.majors
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
    console.debug("[ba-messages-list] page offset: %o, limit: %o", this.offset, this.limit)
  }

  onPage(event) {
    console.debug("[ba-messages-list] onPage event:", event);
    this.page(event.offset, event.limit);
  }

  onActivate(event) {
    console.debug("[ba-major-list] onActivate event: %o", event);
  }

  onSelect({ selected }) {
    console.log("[ba-major-list] onSelect selected: %o, this.selected: %o", selected, this.selected);
    //this.router.navigate(['/pages/universities/', selected[0]['id']]);
  }
}

