import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {CampaignsRouterComponent} from "./campaigns-router.component";
import {CampaignListComponent} from "./components/campaign-list/campaign-list.component.ts";
import {CampaignComponent} from "./components/campaign/campaign.component";
import {SkycodeComponent} from "./components/skycode/skycode.component";

export const routes: Routes = [
  {
    path: '',
    component: CampaignsRouterComponent,
    children:[
      { path: 'list', component: CampaignListComponent  },
      { path: 'skycode/:skycode_dsin', component: SkycodeComponent },
      { path: ':campaign_dsin', component: CampaignComponent },
    ]
  }
];


export const routing:ModuleWithProviders = RouterModule.forChild(routes);