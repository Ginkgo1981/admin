import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

//third-part
import { QuillModule } from 'ngx-quill'
import { SelectModule } from 'ng-select';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { DropdownModule, ModalModule } from 'ng2-bootstrap';
import { NgaModule } from '../../theme/nga.module';
import { NgxDatatableModule} from '@swimlane/ngx-datatable'
import { NgxUIModule } from '@swimlane/ngx-ui'
//service
import { UniversitiesService} from "../../services/universities.service";
import { StudentsService} from "../../services/students.service";
import { DrawerService, NotificationService } from '@swimlane/ngx-ui'

import { GlobalDataService } from '../../services/globle-data.service'
//job
import { JobListComponent } from './components/job-list/job-list.component.ts'
import { JobsRouterComponent } from './jobs-router.component.ts'
import { JobComponent} from "./components/job/job.component.ts";
import { routing } from './jobs-router.routing.ts';

@NgModule({
  imports: [
    CommonModule,
    routing,
    NgaModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule.forRoot(),
    ModalModule.forRoot(),
    SelectModule,
    SimpleNotificationsModule,
    NgxDatatableModule,
    NgxUIModule,
    QuillModule
  ],
  declarations: [
    JobsRouterComponent,
    JobListComponent,
    JobComponent
  ],
  providers: [
    UniversitiesService,
    StudentsService,
    DrawerService,
    NotificationService
  ]

})
export class JobsRouterModule {
}