import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule, ModalModule } from 'ng2-bootstrap';
import { NgaModule } from '../../theme/nga.module';
import { routing } from './messages.routing';
import { SelectModule } from 'ng-select';
import {NgxDatatableModule} from '@swimlane/ngx-datatable'

import { SimpleNotificationsModule } from 'angular2-notifications';
import {MessagesComponent} from "./messages.component";
import {NotificationMessagesComponent} from "./components/notificationMessages/notificationMessages.component";
import {PointMessagesComponent} from "./components/pointMessages/pointMessages.component";
import {SubscriptionMessagesComponent} from "./components/subscriptionMessages/subscriptionMessages.component";
import {MessagesService} from "../../services/messages.service";
import { NgxUIModule } from '@swimlane/ngx-ui'
import { DrawerService } from '@swimlane/ngx-ui'

@NgModule({
  imports: [
    CommonModule,
    routing,
    NgaModule,
    FormsModule,
    DropdownModule.forRoot(),
    ModalModule.forRoot(),
    SelectModule,
    SimpleNotificationsModule,
    NgxDatatableModule,
    NgxUIModule
  ],
  declarations: [
      MessagesComponent,
      NotificationMessagesComponent,
      PointMessagesComponent,
      SubscriptionMessagesComponent
  ],
  providers: [
      MessagesService,
    DrawerService
  ]

})
export class MessagesModule {
}