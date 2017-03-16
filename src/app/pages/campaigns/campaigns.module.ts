import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { MaterialComponent } from './material.component';
import { routing } from './campaigns.routing';
import { NgaModule } from '../../theme/nga.module';
import { FormsModule } from '@angular/forms';
import { GlobalDataService} from '../../services/globle-data.service'
import { DropdownModule, ModalModule } from 'ng2-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import {SelectModule} from 'ng-select';
import {CampaignsComponent} from "./campaigns.component";
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

      CampaignsComponent,
      CampaignListComponent,
      CampaignComponent
  ],
  providers: [

  ]

})
export class CampaignsModule {
}