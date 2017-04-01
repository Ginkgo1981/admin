import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule, ModalModule } from 'ng2-bootstrap';
import { NgaModule } from '../../theme/nga.module';
import { GlobalDataService } from '../../services/globle-data.service'
import { UniversitiesRouterComponent } from "./universities-router.component.ts"
import { routing } from './universities-router.routing.ts';
import { SelectModule } from 'ng-select';
import {NgxDatatableModule} from '@swimlane/ngx-datatable'

import { SimpleNotificationsModule } from 'angular2-notifications';
import { UniversityListComponent} from "./components/university-list/university-list.component.ts";
import {UniversitiesService} from "../../services/universities.service";
import {UniversityComponent} from "./components/university/university.component";
import {UsersService} from "../../services/users.service";

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
    NgxDatatableModule
  ],
  declarations: [
    UniversitiesRouterComponent,
    UniversityListComponent,
    UniversityComponent
  ],
  providers: [
    UniversitiesService,
      UsersService
  ]

})
export class UniversitiesRouterModule {
}