import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { MajorsRouterComponent } from './majors-router.component'
import { MajorListComponent } from './components/major-list/major-list.component'
//import {UniversityListComponent} from "./components/university-list/university-list.component";
//import {UniversityComponent} from "./components/university/university.component";

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: MajorsRouterComponent,
    children:[
      { path: 'list', component: MajorListComponent },
      //{ path: 'detail', component: UniversityComponent },
      //{ path: ':dsin', component: UniversityComponent },
    ]
  }
];


export const routing:ModuleWithProviders = RouterModule.forChild(routes);