import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SelectModule } from 'ng-select';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { DropdownModule, ModalModule } from 'ng2-bootstrap';
import { NgaModule } from '../../theme/nga.module';
import { NgxDatatableModule} from '@swimlane/ngx-datatable'
import { NgxUIModule } from '@swimlane/ngx-ui'

import { UniversitiesService} from "../../services/universities.service";
import { UsersService} from "../../services/users.service";
import { DrawerService, NotificationService } from '@swimlane/ngx-ui'

import { UniversityListComponent} from "./components/university-list/university-list.component";
import { UniversitiesRouterComponent } from "./universities-router.component"
import { UniversityComponent} from "./components/university/university.component";
import { GlobalDataService } from '../../services/globle-data.service'

import { routing } from './universities-router.routing';

@NgModule({
  imports: [
    CommonModule,
    routing,
    NgaModule,
    FormsModule,
    DropdownModule.forRoot(),
    ModalModule.forRoot(),
    SelectModule,
    SimpleNotificationsModule,
    NgxDatatableModule,
    NgxUIModule
  ],
  declarations: [
    UniversitiesRouterComponent,
    UniversityListComponent,
    UniversityComponent
  ],
  providers: [
    UniversitiesService,
    UsersService,
    DrawerService,
    NotificationService
  ]

})
export class UniversitiesRouterModule {
}