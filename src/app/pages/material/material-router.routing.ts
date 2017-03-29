import { Routes, RouterModule }  from '@angular/router';
import { MaterialRouterComponent } from './material-router.component.ts';
import { ModuleWithProviders } from '@angular/core';
import { StoriesComponent } from "./components/stories/stories.component";
import { StoryComponent } from "./components/story/story.component";

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: MaterialRouterComponent,
    children:[
      { path: 'stories', component: StoriesComponent  },
      { path: 'stories/:id', component: StoryComponent },
      { path: 'stories/create', component: StoryComponent },
    ]
  }
];


export const routing:ModuleWithProviders = RouterModule.forChild(routes);