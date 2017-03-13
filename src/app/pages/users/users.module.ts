import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule, ModalModule } from 'ng2-bootstrap';
import { NgaModule } from '../../theme/nga.module';
import { GlobalDataService } from '../../services/globle-data.service'
import { StudentComponent } from "./components/student/student.component"
import { StudentsComponent } from "./components/students/students.component"
import { PointMessageComponent } from "./components/student/pointMessage/pointMessage.component"
import { UsersComponent } from "./users.component"
import { StudentsService, StoriesService, MessagesService} from "../../services";
import { routing } from './users.routing';
import {SelectModule} from 'ng-select';

@NgModule({
  imports: [
    CommonModule,
    routing,
    NgaModule,
    FormsModule,
    DropdownModule.forRoot(),
    ModalModule.forRoot(),
    SelectModule
  ],
  declarations: [
    StudentComponent,
    StudentsComponent,
    UsersComponent,
    PointMessageComponent
  ],
  providers: [
    StudentsService,
    StoriesService,
    MessagesService,
    GlobalDataService

  ]

})
export class UsersModule {
}