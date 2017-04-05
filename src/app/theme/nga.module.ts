import { NgModule, ModuleWithProviders }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgUploaderModule } from 'ngx-uploader';
import { MessagesService} from "../services/messages.service";
import { DsinService} from "../services/dsin.service";
import { SelectModule} from 'ng-select';
import { ModalModule } from 'ng2-bootstrap';
import { MaterialModule } from '@angular/material';
import { NgxDatatableModule} from '@swimlane/ngx-datatable'
import { TagInputModule } from 'ng2-tag-input';
import { NgxUIModule } from '@swimlane/ngx-ui'
import { BaThemeConfig } from './theme.config';
import { BaThemeConfigProvider } from './theme.configProvider';

import {
  BaAmChart,
  BaBackTop,
  BaCard,
  BaChartistChart,
  BaCheckbox,
  BaContentTop,
  BaFullCalendar,
  BaMenuItem,
  BaMenu,
  BaMsgCenter,
  BaMultiCheckbox,
  BaPageTop,
  BaPictureUploader,
  BaSidebar,
  BaStudentList,
  BaMessageList,
  BaSendMessages,
  BaStudentBasic,
  BaUniversityEditor,
  BaMajorEditor,
  BaUniversityInfo,
  BaImagesUploader

} from './components';

import { BaCardBlur } from './components/baCard/baCardBlur.directive';

import {
  BaScrollPosition,
  BaSlimScroll,
  BaThemeRun
} from './directives';

import {
  BaAppPicturePipe,
  BaKameleonPicturePipe,
  BaProfilePicturePipe
} from './pipes';

import {
  BaImageLoaderService,
  BaMenuService,
  BaThemePreloader,
  BaThemeSpinner
} from './services';

import {
  EmailValidator,
  EqualPasswordsValidator
} from './validators';

const NGA_COMPONENTS = [
  BaAmChart,
  BaBackTop,
  BaCard,
  BaChartistChart,
  BaCheckbox,
  BaContentTop,
  BaFullCalendar,
  BaMenuItem,
  BaMenu,
  BaMsgCenter,
  BaMultiCheckbox,
  BaPageTop,
  BaPictureUploader,
  BaSidebar,
  BaStudentList,
  BaMessageList,
  BaSendMessages,
  BaStudentBasic,
  BaUniversityEditor,
  BaMajorEditor,
  BaUniversityInfo,
  BaImagesUploader
];

const NGA_DIRECTIVES = [
  BaScrollPosition,
  BaSlimScroll,
  BaThemeRun,
  BaCardBlur,
  //ModalDirective
];

const NGA_PIPES = [
  BaAppPicturePipe,
  BaKameleonPicturePipe,
  BaProfilePicturePipe
];

const NGA_SERVICES = [
  BaImageLoaderService,
  BaThemePreloader,
  BaThemeSpinner,
  BaMenuService,
  MessagesService,
  DsinService
];

const NGA_VALIDATORS = [
  EmailValidator,
  EqualPasswordsValidator
];

@NgModule({
  declarations: [
    ...NGA_PIPES,
    ...NGA_DIRECTIVES,
    ...NGA_COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgUploaderModule,
    SelectModule,
    ModalModule,
    MaterialModule,
    NgxDatatableModule,
    NgxUIModule,
    TagInputModule


  ],
  exports: [
    ...NGA_PIPES,
    ...NGA_DIRECTIVES,
    ...NGA_COMPONENTS
  ]
})
export class NgaModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: NgaModule,
      providers: [
        BaThemeConfigProvider,
        BaThemeConfig,
        ...NGA_VALIDATORS,
        ...NGA_SERVICES
      ],
    };
  }
}
