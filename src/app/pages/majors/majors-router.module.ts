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
import { StudentsService} from "../../services/students.service.ts";
import { DrawerService, NotificationService } from '@swimlane/ngx-ui'

import { GlobalDataService } from '../../services/globle-data.service'
//major
import { MajorListComponent } from './components/major-list/major-list.component'
import { MajorsRouterComponent } from './majors-router.component'
import { MajorComponent} from "./components/major/major.component";
import { routing } from './majors-router.routing';

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
    MajorsRouterComponent,
    MajorListComponent,
    MajorComponent
  ],
  providers: [
    UniversitiesService,
    StudentsService,
    DrawerService,
    NotificationService
  ]

})
export class MajorsRouterModule {
}