import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { StudentsComponent } from './students.component';
import { routing } from './students.routing';
import { NgaModule } from '../../theme/nga.module';
import { FormsModule } from '@angular/forms';
import { Userslist } from './userslist'
import {UserslistService} from "./userslist/userslist.service";
@NgModule({
  imports: [
    CommonModule,
    routing,
    NgaModule,
    FormsModule
  ],
  declarations: [
    StudentsComponent,
    Userslist

  ],
  providers: [
    UserslistService

      ]

})
export class StudentsModule {}