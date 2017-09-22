import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { NgxUIModule } from '@swimlane/ngx-ui'
import { Pages } from './pages.component';
import { ReactiveFormsModule } from '@angular/forms';

import { PhotosService } from '../services/photos.service'


@NgModule({
  imports: [CommonModule, NgaModule,NgxUIModule, ReactiveFormsModule, routing],
  declarations: [Pages],
  providers: [
    PhotosService
  ]
})
export class PagesModule {
}
