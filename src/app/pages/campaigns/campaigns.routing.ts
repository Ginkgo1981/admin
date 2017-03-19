import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {CampaignsComponent} from "./campaigns.component";
import {CampaignListComponent} from "./components/campaignList/campaignList.component";
import {CampaignComponent} from "./components/campaign/campaign.component";

export const routes: Routes = [
  {
    path: '',
    component: CampaignsComponent,
    children:[
      { path: 'list', component: CampaignListComponent  },
      { path: ':id', component: CampaignComponent },
    ]
  }
];


export const routing:ModuleWithProviders = RouterModule.forChild(routes);