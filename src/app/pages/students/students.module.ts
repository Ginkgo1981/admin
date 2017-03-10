import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Students } from './students.component';
import { routing } from './students.routing';
import { NgaModule } from '../../theme/nga.module';
import { FormsModule } from '@angular/forms';
import { Userslist } from './userslist/userslist.component'
import {UserslistService} from "./userslist/userslist.service";
@NgModule({
  imports: [
    CommonModule,
    routing,
    NgaModule,
    FormsModule
  ],
  declarations: [
    Students,
    Userslist

  ],
  providers: [
    UserslistService

      ]

})
export class StudentsModule {}