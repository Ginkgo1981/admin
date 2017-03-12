import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Students } from './students.component';
import { routing } from './students.routing';
import { NgaModule } from '../../theme/nga.module';
import { FormsModule } from '@angular/forms';
import { Userslist } from './userslist/userslist.component'
import {UserslistService} from "./userslist/userslist.service";
import {UserService} from "./user/user.service";

import {GlobalDataService} from '../../services/globle-data.service'
import {User} from "./user/user.component";
import { DropdownModule, ModalModule } from 'ng2-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    routing,
    NgaModule,
    FormsModule,
    DropdownModule.forRoot(),
    ModalModule.forRoot(),
  ],
  declarations: [
    Students,
    Userslist,
    User


  ],
  providers: [
    UserslistService,
    UserService,
    GlobalDataService

  ]

})
export class StudentsModule {
}