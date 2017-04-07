import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { routing } from './campaigns-router.routing';
import { NgaModule } from '../../theme/nga.module';
import { FormsModule } from '@angular/forms';
import { GlobalDataService} from '../../services/globle-data.service'
import { DropdownModule, ModalModule } from 'ng2-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import {SelectModule} from 'ng-select';
import {CampaignsRouterComponent} from "./campaigns-router.component";
import {CampaignListComponent} from "./components/campaignList/campaignList.component";
import {CampaignComponent} from "./components/campaign/campaign.component";


@NgModule({
  imports: [
    CommonModule,
    routing,
    NgaModule,
    FormsModule,
    DropdownModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    SelectModule
  ],
  declarations: [

      CampaignsRouterComponent,
      CampaignListComponent,
      CampaignComponent
  ],
  providers: [

  ]

})
export class CampaignsRouterModule {
}