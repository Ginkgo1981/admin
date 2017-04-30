import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { UniversitiesRouterComponent } from './universities-router.component'
import {UniversityListComponent} from "./components/university-list/university-list.component";
import {UniversityComponent} from "./components/university/university.component";

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: UniversitiesRouterComponent,
    children:[
      { path: 'list', component: UniversityListComponent },
      { path: 'detail', component: UniversityComponent },
      { path: ':dsin', component: UniversityComponent },
    ]
  }
];


export const routing:ModuleWithProviders = RouterModule.forChild(routes);