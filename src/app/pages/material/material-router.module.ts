import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { MaterialRouterComponent } from './material-router.component';
import { routing } from './material-router.routing';
import { NgaModule } from '../../theme/nga.module';
import { FormsModule } from '@angular/forms';
import { GlobalDataService} from '../../services/globle-data.service'
import { DropdownModule, ModalModule } from 'ng2-bootstrap';
import { StoriesComponent} from "./components/stories/stories.component";
import { StoriesService} from "../../services/stories.service";
import { StoryComponent} from "./components/story/story.component";
import { ReactiveFormsModule } from '@angular/forms';
import {SelectModule} from 'ng-select';
import { QuillModule } from 'ngx-quill'

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
    QuillModule,
  ],
  declarations: [
    StoriesComponent,
    MaterialRouterComponent,
    StoryComponent
  ],
  providers: [
    GlobalDataService,
    StoriesService

  ]

})
export class MaterialRouterModule {
}