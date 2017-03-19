import {Component, OnInit,ViewChild, Input, Output, ElementRef, EventEmitter} from '@angular/core';
import {Message} from "../../../models/message";

import {DatatableComponent} from '@swimlane/ngx-datatable'
import {MessagesService} from "../../../services/messages.service";

@Component({
  selector: 'ba-messages-list',
  templateUrl: './baMessages.html',
  //styleUrls: ['./baMessages.scss']
})
export class BaMessages implements OnInit {

  @Input() messages:Array<Message>;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(private _service:MessagesService) {}



  rows = [];
  count: number = 0;
  offset: number = 0;
  limit: number = 10;

  selected = [];
  //columns = [
  //  { prop: 'receiver_id' },
  //  { name: 'content' },
  //  { name: 'attachment_id' },
  //  { name: 'attachment_type' },
  //  {
  //    cellTemplate: this.chkBxTmpl,
  //    headerTemplate: this.hdrTpl,
  //    name: 'type',
  //    width: 100
  //  }
  //];



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


  page(offset, limit) {

    this._service.getMessages('PointMessage').then(res => {

      let results = res.data
      this.count = 1000;

      const start = offset * limit;
      const end = start + limit;
      const rows = [...this.rows];

      for (let i = start; i < end; i++) {
        rows[i] = results[i];
      }

      this.rows = rows;




      //    let messages = res.data
      //    this.rows = messages;
      //this.count = messages.length;
      //console.log("===== row ==== %o", this.rows)
        }
    )



    console.log("====offset: %o, limit: %o", offset, limit)
    //this.fetch((results) => {
    //  this.count = results.length;
    //
    //  const start = offset * limit;
    //  const end = start + limit;
    //  const rows = [...this.rows];
    //
    //  for (let i = start; i < end; i++) {
    //    rows[i] = results[i];
    //  }
    //
    //  this.rows = rows;
    //  console.log('Page Results', start, end, rows);
    //});



  }




  onPage(event) {
    console.log('Page Event', event);
    this.page(event.offset, event.limit);
  }


}

