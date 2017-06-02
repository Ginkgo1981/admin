import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule, ModalModule } from 'ng2-bootstrap';
import { NgaModule } from '../../theme/nga.module';
import { GlobalDataService } from '../../services/globle-data.service'
import { StudentComponent } from "./components/student/student.component"
import { StudentListComponent } from "./components/student-list/student-list.component"
import { UsersRouterComponent } from "./users-router.component"
import { StudentsService, StoriesService, MessagesService, DsinService} from "../../services";
import { routing } from './users-router.routing';
import { SelectModule} from 'ng-select';
import { MaterialModule } from '@angular/material';
//import { SimpleNotificationsModule } from 'angular2-notifications';
import { NgxUIModule } from '@swimlane/ngx-ui'
import { DrawerService, NotificationService } from '@swimlane/ngx-ui'
@NgModule({
  imports: [
    CommonModule,
    routing,
    NgaModule,
    FormsModule,
    DropdownModule.forRoot(),
    ModalModule.forRoot(),
    SelectModule,
    //SimpleNotificationsModule,
    MaterialModule,
    NgxUIModule
  ],
  declarations: [
    StudentComponent,
    StudentListComponent,
    UsersRouterComponent
  ],
  providers: [
    StudentsService,
    StoriesService,
    MessagesService,
    GlobalDataService,
    DsinService,
    DrawerService
    //NotificationService
  ]

})
export class UsersRouterModule {
}