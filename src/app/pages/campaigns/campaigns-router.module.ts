import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { routing } from './campaigns-router.routing';
import { NgaModule } from '../../theme/nga.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//third-part
import { DndModule} from 'ng2-dnd';
import { QuillModule } from 'ngx-quill'
import { NgxDatatableModule} from '@swimlane/ngx-datatable'
import { NgxUIModule } from '@swimlane/ngx-ui'
import { SimpleNotificationsModule } from 'angular2-notifications';
import { DropdownModule, ModalModule } from 'ng2-bootstrap';
import { SelectModule} from 'ng-select';
import { QRCodeModule } from 'angular2-qrcode';

import { CampaignsRouterComponent } from "./campaigns-router.component";
import { CampaignListComponent } from "./components/campaign-list/campaign-list.component.ts";
import { CampaignComponent } from "./components/campaign/campaign.component";
import { SkycodeComponent } from "./components/skycode/skycode.component"

//services
import { GlobalDataService} from '../../services/globle-data.service'
import { CampaignsService} from "../../services/campaigns.service";
import {StudentsService} from "../../services/students.service";


@NgModule({
  imports: [
    CommonModule,
    routing,
    NgaModule,
    FormsModule,
    DropdownModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    SelectModule,
    DndModule.forRoot(),
    QuillModule,
    NgxDatatableModule,
    NgxUIModule,
    SimpleNotificationsModule,
    QRCodeModule
  ],
  declarations: [
    CampaignsRouterComponent,
    CampaignListComponent,
    CampaignComponent,
    SkycodeComponent
  ],
  providers: [
    CampaignsService,
    StudentsService
  ]

})
export class CampaignsRouterModule {
}