import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import {MessagesRouterComponent} from "./messages-router.component";
import {MessageListComponent} from "./components/message-list/message-list.component";

export const routes: Routes = [
  {
    path: '',
    component: MessagesRouterComponent,
    children:[
      { path: 'message-list', component: MessageListComponent },
    ]
  }
];


export const routing:ModuleWithProviders = RouterModule.forChild(routes);