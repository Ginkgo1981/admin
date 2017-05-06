import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { MajorsRouterComponent } from './majors-router.component'
import { MajorListComponent } from './components/major-list/major-list.component'
import {MajorComponent} from "./components/major/major.component";

export const routes: Routes = [
  {
    path: '',
    component: MajorsRouterComponent,
    children:[
      { path: 'list', component: MajorListComponent },
      { path: 'detail', component: MajorListComponent },
      { path: ':major_dsin', component: MajorComponent },
    ]
  }
];


export const routing:ModuleWithProviders = RouterModule.forChild(routes);