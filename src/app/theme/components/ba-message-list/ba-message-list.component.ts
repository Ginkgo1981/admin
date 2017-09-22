import {Component, OnInit,ViewChild, Input, Output, ElementRef, EventEmitter} from '@angular/core';
import {Message} from "../../../models/message";
import {DatatableComponent} from '@swimlane/ngx-datatable'
import {MessagesService} from "../../../services/messages.service";

@Component({
  selector: 'ba-messages-list',
  templateUrl: './ba-message-list.component.html',
  //styleUrls: ['./ba-message-list.component.scss']
})
export class BaMessageList implements OnInit {
  @Input() dsin:String;
  @ViewChild(DatatableComponent) table:DatatableComponent;
  constructor(private _messagesService:MessagesService) {
  }

  rows = [];
  count:number = 0;
  offset:number = 0;
  limit:number = 10
  selected = [];

  ngOnInit():void {
    this.count = 10;
    this.page(this.offset, this.limit)
    console.debug("[ba-message-list] onInit dsin: %o", this.dsin)
  }

  page(offset = 0, limit = 10) {
    this._messagesService.getMessages().then(res => {
          console.debug("[ba-message-list] getMessages res: %o", res)
          let results = res.messages
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
    console.debug("[ba-message-list] onActivate event: %o", event);
  }

  onSelect({ selected }) {
    console.debug("[ba-message-list] onSelect selected: %o, this.selected: %o", selected, this.selected);
    //this.router.navigate(['/pages/universities/', selected[0]['id']]);
  }
}

