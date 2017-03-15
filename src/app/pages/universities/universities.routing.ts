import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { UniversitiesComponent } from './universities.component'
import {UniversityListComponent} from "./components/universityList/universityList.component";
import {UniversityComponent} from "./components/university/university.component";

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: UniversitiesComponent,
    children:[
      { path: 'university-list', component: UniversityListComponent },
      { path: 'university-list/:id', component: UniversityComponent },
    ]
  }
];


export const routing:ModuleWithProviders = RouterModule.forChild(routes);