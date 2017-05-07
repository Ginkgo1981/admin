import { Routes, RouterModule }  from '@angular/router';
import { MaterialRouterComponent } from './material-router.component';
import { ModuleWithProviders } from '@angular/core';
import { StoriesComponent } from "./components/stories/stories.component";
import { StoryComponent } from "./components/story/story.component";

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: MaterialRouterComponent,
    children:[
      { path: 'list', component: StoriesComponent  },
      { path: 'create', component: StoryComponent },
      { path: ':story_dsin', component: StoryComponent },
    ]
  }
];

export const routing:ModuleWithProviders = RouterModule.forChild(routes);