import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import {MessagesRouterComponent} from "./messages-router.component";
import {PointMessagesComponent} from "./components/pointMessages/pointMessages.component";
import {SubscriptionMessagesComponent} from "./components/subscriptionMessages/subscriptionMessages.component";
import {NotificationMessagesComponent} from "./components/notificationMessages/notificationMessages.component";

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: MessagesRouterComponent,
    children:[
      { path: 'point_messages', component: PointMessagesComponent },
      { path: 'subscription_messages', component: SubscriptionMessagesComponent },
      { path: 'notification_messages', component: NotificationMessagesComponent },
    ]
  }
];


export const routing:ModuleWithProviders = RouterModule.forChild(routes);