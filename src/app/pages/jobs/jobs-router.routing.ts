import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { JobsRouterComponent } from './jobs-router.component.ts'
import { JobListComponent } from './components/job-list/job-list.component.ts'
import {JobComponent} from "./components/job/job.component.ts";

export const routes: Routes = [
  {
    path: '',
    component: JobsRouterComponent,
    children:[
      { path: 'list', component: JobListComponent },
      //{ path: 'detail', component: JobListComponent },
      { path: ':id', component: JobComponent },
    ]
  }
];


export const routing:ModuleWithProviders = RouterModule.forChild(routes);