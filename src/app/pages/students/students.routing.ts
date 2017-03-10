import { Routes, RouterModule }  from '@angular/router';
import { Students } from './students.component';

import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Students,
    children:[
        //{}
    ]
  }
];


export const routing:ModuleWithProviders = RouterModule.forChild(routes);