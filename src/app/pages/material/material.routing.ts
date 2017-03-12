import { Routes, RouterModule }  from '@angular/router';
import { MaterialComponent } from './material.component';
import { ModuleWithProviders } from '@angular/core';
import { StoriesComponent } from "./components/stories/stories.component";
import { StoryComponent } from "./components/story/story.component";

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: MaterialComponent,
    children:[
      { path: 'stories', component: StoriesComponent  },
      { path: 'stories/:id', component: StoryComponent },
      { path: 'stories/create', component: StoryComponent },
    ]
  }
];


export const routing:ModuleWithProviders = RouterModule.forChild(routes);