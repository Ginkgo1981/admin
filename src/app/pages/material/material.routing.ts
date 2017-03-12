import { Routes, RouterModule }  from '@angular/router';
import { Material } from './material.component';
import { ModuleWithProviders } from '@angular/core';
import {Stories} from "./components/stories/stories.component";
import {Story} from "./components/story/story.component";

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Material,
    children:[
      { path: 'stories', component: Stories  },
      { path: 'stories/:id', component: Story },
      { path: 'stories/create', component: Story },
    ]
  }
];


export const routing:ModuleWithProviders = RouterModule.forChild(routes);