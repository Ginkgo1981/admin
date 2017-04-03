import {Component, OnInit,ViewChild, Input, Output, ElementRef, EventEmitter} from '@angular/core';
import {Message} from "../../../models/message";
import {DatatableComponent} from '@swimlane/ngx-datatable'
import {MessagesService} from "../../../services/messages.service";

@Component({
  selector: 'ba-messages-list',
  templateUrl: './ba-message-list.html',
  //styleUrls: ['./ba-message-list.scss']
})
export class BaMessageList implements OnInit {

  @Input() messages:Array<Message>;
  @Input() message_type: String

  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(private _service:MessagesService) {}

  rows = [];
  count: number = 0;
  offset: number = 0;
  limit: number = 10;
  selected = [];

  ngOnInit():void {
    this.count = 10;
    console.log("message: %o", this.messages)
    this.page(this.offset, this.limit)
  }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);
    //this.router.navigate(['/pages/universities/', selected[0]['id']]);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }


  page(offset=0, limit=10) {
    this._service.getMessages(this.message_type).then(res => {
      let results = res.data
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
    console.log("====offset: %o, limit: %o", offset, limit)
  }

  onPage(event) {
    console.log('Page Event', event);
    this.page(event.offset, event.limit);
  }


}

