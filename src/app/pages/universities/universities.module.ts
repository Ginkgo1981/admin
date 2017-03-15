import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule, ModalModule } from 'ng2-bootstrap';
import { NgaModule } from '../../theme/nga.module';
import { GlobalDataService } from '../../services/globle-data.service'
import { UniversitiesComponent } from "./universities.component"
import { routing } from './universities.routing';
import { SelectModule } from 'ng-select';
import {NgxDatatableModule} from '@swimlane/ngx-datatable'

import { SimpleNotificationsModule } from 'angular2-notifications';
import { UniversityListComponent} from "./components/universityList/universityList.component";
import {UniversitiesService} from "../../services/universities.service";
import {UniversityComponent} from "./components/university/university.component";

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
    UniversitiesComponent,
    UniversityListComponent,
    UniversityComponent
  ],
  providers: [
    UniversitiesService
  ]

})
export class UniversitiesModule {
}