import { Routes, RouterModule }  from '@angular/router';
import { Students } from './students.component';

import { ModuleWithProviders } from '@angular/core';
import {User} from "./user/user.component";
import {Userslist} from "./userslist/userslist.component";

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Students,
    children:[
      { path: '', component: Userslist },
      { path: ':id', component: User },
    ]
  }
];


export const routing:ModuleWithProviders = RouterModule.forChild(routes);