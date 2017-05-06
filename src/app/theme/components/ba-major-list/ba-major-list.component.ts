import { Component, OnInit,ViewChild, Input, Output, ElementRef, EventEmitter} from '@angular/core';
import { Message} from "../../../models/message";
import { DatatableComponent} from '@swimlane/ngx-datatable'
import { MessagesService} from "../../../services/messages.service";
import { UniversitiesService} from "../../../services/universities.service";
import { Router,ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'

@Component({
  selector: 'ba-majors-list',
  templateUrl: './ba-major-list.component.html',
  styleUrls: ['./ba-major-list.component.scss']
})
export class BaMajorList implements OnInit {
  @Input() university_dsin:String;
  @Input() columns: Array<string> = ['id', 'name', 'edit', 'delete', 'choose'];

  @Output() public onActivateChanged = new EventEmitter();

  @ViewChild(DatatableComponent) table:DatatableComponent;
  constructor(private _service:UniversitiesService,
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
    console.debug("[ba-major-list] onInit dsin: %o, columns: %o", this.university_dsin, this.columns)
  }

  page(offset = 0, limit = 10) {
    this._service.getMajorList(this.university_dsin).then(res => {
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

  onActivate({row: major, column}) {
    console.debug("[ba-major-list] onActivate major: %o column: %o",major, column );
    if(column.name == 'edit'){
      console.debug("[ba-major-list] onActivate edit dsin: ", major.dsin)
      this.router.navigate(['/pages/majors/', major.dsin]);
    }else if(column.name ==='delete'){
      console.debug("[ba-major-list] onActivate delete dsin: ", major.dsin)
    }else if(column.name === 'choose'){
      console.debug("[ba-major-list] onActivate choose")
    }
    this.onActivateChanged.emit({
      action: column.name,
      data: major
    })
  }

  onSelect({ selected }) {
    console.log("[ba-major-list] onSelect selected: %o, this.selected: %o", selected, this.selected);
  }
}

