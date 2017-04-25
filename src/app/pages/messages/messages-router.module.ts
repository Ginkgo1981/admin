import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule, ModalModule } from 'ng2-bootstrap';
import { NgaModule } from '../../theme/nga.module';
import { routing } from './messages-router.routing';
import { SelectModule } from 'ng-select';
import { NgxDatatableModule} from '@swimlane/ngx-datatable'

import { SimpleNotificationsModule } from 'angular2-notifications';
import { MessagesRouterComponent} from "./messages-router.component";

import { MessageListComponent } from './components/message-list/message-list.component'
import { MessagesService} from "../../services/messages.service";
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
    MessagesRouterComponent,
    MessageListComponent,
  ],
  providers: [
    MessagesService,
    DrawerService
  ]

})
export class MessagesRouterModule {
}