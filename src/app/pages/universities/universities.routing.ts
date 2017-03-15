import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { UniversitiesComponent } from './universities.component'
import {UniversityListComponent} from "./components/universityList.component";

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: UniversitiesComponent,
    children:[
      { path: 'university-list', component: UniversityListComponent }
      //{ path: 'university-list/:id', component: Uni },
    ]
  }
];


export const routing:ModuleWithProviders = RouterModule.forChild(routes);