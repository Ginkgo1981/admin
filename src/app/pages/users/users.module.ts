import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule, ModalModule } from 'ng2-bootstrap';
import { NgaModule } from '../../theme/nga.module';
import { GlobalDataService } from '../../services/globle-data.service'
import { StudentComponent } from "./components/student/student.component"
import { StudentsComponent } from "./components/students/students.component"
import { UsersComponent } from "./users.component"
import { UsersService, StoriesService, MessagesService} from "../../services";
import { routing } from './users.routing';
import {SelectModule} from 'ng-select';

import { SimpleNotificationsModule } from 'angular2-notifications';

@NgModule({
  imports: [
    CommonModule,
    routing,
    NgaModule,
    FormsModule,
    DropdownModule.forRoot(),
    ModalModule.forRoot(),
    SelectModule,
    SimpleNotificationsModule
  ],
  declarations: [
    StudentComponent,
    StudentsComponent,
    UsersComponent
  ],
  providers: [
    UsersService,
    StoriesService,
    MessagesService,
    GlobalDataService

  ]

})
export class UsersModule {
}