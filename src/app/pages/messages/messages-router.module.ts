import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule, ModalModule } from 'ng2-bootstrap';
import { NgaModule } from '../../theme/nga.module';
import { routing } from './messages-router.routing';
import { SelectModule } from 'ng-select';
import { NgxDatatableModule} from '@swimlane/ngx-datatable'
import { NgxUIModule } from '@swimlane/ngx-ui'
import { SimpleNotificationsModule } from 'angular2-notifications';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill'

import {DndModule} from 'ng2-dnd';

//service
import { MessagesService} from "../../services/messages.service";
import { DrawerService } from '@swimlane/ngx-ui'
import { GlobalDataService} from '../../services/globle-data.service'
import { StoriesService} from "../../services/stories.service";
import { UniversitiesService} from "../../services/universities.service";
import { StudentsService } from '../../services/students.service.ts'

//component
import { MessagesRouterComponent} from "./messages-router.component";
import { MessageListComponent } from './components/message-list/message-list.component'
import { MessageComponent } from './components/message/message.component'
@NgModule({
  imports: [
    CommonModule,
    routing,
    NgaModule,
    FormsModule,
    DropdownModule.forRoot(),
    ModalModule.forRoot(),
    DndModule.forRoot(),
    SelectModule,
    SimpleNotificationsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgxUIModule,
    QuillModule
  ],
  declarations: [
    MessagesRouterComponent,
    MessageListComponent,
    MessageComponent
  ],
  providers: [
    MessagesService,
    DrawerService,
    GlobalDataService,
    StoriesService,
    UniversitiesService,
    StudentsService
  ]

})
export class MessagesRouterModule {
}