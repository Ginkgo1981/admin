import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule, ModalModule } from 'ng2-bootstrap';
import { NgaModule } from '../../theme/nga.module';
import { GlobalDataService } from '../../services/globle-data.service'
import { StudentComponent } from "./components/student/student.component"
import { StudentsComponent } from "./components/students/students.component"
import { UsersComponent } from "./users.component"
import { StudentsService } from "../../services";
import { routing } from './users.routing';

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
    StudentComponent,
    StudentsComponent,
    UsersComponent
  ],
  providers: [
    StudentsService,
    GlobalDataService

  ]

})
export class UsersModule {
}