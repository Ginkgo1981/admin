import {Component} from '@angular/core';
import {UserslistService} from './userslist.service'

@Component({
  selector: 'userlist-table',
  templateUrl: './userslist.html'
})
export class Userslist {
  peopleTableData:Array<any>;

  constructor(private _service:UserslistService) {
    _service.getData().then(res => {
          console.log("===== res %o", res)
          this.peopleTableData = res['data']
        }
    );
  }

}