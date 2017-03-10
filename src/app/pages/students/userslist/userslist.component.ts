import {Component} from '@angular/core';
import {UserslistService} from './userslist.service'

@Component({
  selector: 'userlist-table',
  templateUrl: './userslist.html'
})
export class Userslist {
  peopleTableData:Array<any>;
  constructor(private _service: UserslistService){
    this.peopleTableData = _service.peopleTableData;
  }

}