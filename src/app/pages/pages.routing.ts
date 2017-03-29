import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };
// noinspection TypeScriptValidateTypes
export const routes: Routes = [

  //{
  //  path: 'login',
  //  loadChildren: 'app/pages/login/login.module#LoginModule'
  //},
  //{
  //  path: 'register',
  //  loadChildren: 'app/pages/register/register.module#RegisterModule'
  //},
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule' },
      { path: 'messages',  loadChildren: 'app/pages/messages/messages.module#MessagesModule' },
      { path: 'users',  loadChildren: 'app/pages/users/users-router.module#UsersRouterModule' },
      { path: 'materials',  loadChildren: 'app/pages/material/material.module#MaterialModule' },
      { path: 'universities',  loadChildren: 'app/pages/universities/universities.module#UniversitiesModule' },
      { path: 'campaigns',  loadChildren: 'app/pages/campaigns/campaigns.module#CampaignsModule' },

    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
