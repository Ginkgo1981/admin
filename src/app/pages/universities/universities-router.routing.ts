import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { UniversitiesRouterComponent } from './universities-router.component.ts'
import {UniversityListComponent} from "./components/universityList/universityList.component";
import {UniversityComponent} from "./components/university/university.component";

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: UniversitiesRouterComponent,
    children:[
      { path: 'list', component: UniversityListComponent },
      { path: ':id', component: UniversityComponent },
    ]
  }
];


export const routing:ModuleWithProviders = RouterModule.forChild(routes);