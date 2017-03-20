import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { NgxUIModule } from '@swimlane/ngx-ui'
import { Pages } from './pages.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [CommonModule, NgaModule,NgxUIModule, ReactiveFormsModule, routing],
  declarations: [Pages]
})
export class PagesModule {
}
