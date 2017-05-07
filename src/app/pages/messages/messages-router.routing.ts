import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import {MessagesRouterComponent} from "./messages-router.component";
import {MessageListComponent} from "./components/message-list/message-list.component";
import {MessageComponent} from "./components/message/message.component";

export const routes: Routes = [
  {
    path: '',
    component: MessagesRouterComponent,
    children:[
      { path: 'message-list', component: MessageListComponent },
      { path: 'create', component: MessageComponent },
      { path: ':message_dsin', component: MessageComponent }
    ]
  }
];


export const routing:ModuleWithProviders = RouterModule.forChild(routes);