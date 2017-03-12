import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { MaterialComponent } from './material.component';
import { routing } from './material.routing';
import { NgaModule } from '../../theme/nga.module';
import { FormsModule } from '@angular/forms';
import { GlobalDataService} from '../../services/globle-data.service'
import { DropdownModule, ModalModule } from 'ng2-bootstrap';
import { StoriesComponent} from "./components/stories/stories.component";
import { StoriesService} from "../../services/stories.service";
import { StoryComponent} from "./components/story/story.component";
import { ReactiveFormsModule } from '@angular/forms';
import {SelectModule} from 'ng-select';


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
    StoriesComponent,
    MaterialComponent,
    StoryComponent
  ],
  providers: [
    GlobalDataService,
    StoriesService

  ]

})
export class MaterialModule {
}