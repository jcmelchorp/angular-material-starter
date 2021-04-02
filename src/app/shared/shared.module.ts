import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { appearanceModules } from '../material';

import { sharedComponents } from './components';
import { sharedServices } from './services';

import { CardHeaderComponent } from './components/card-header/card-header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ...appearanceModules,
  ],
  exports: [...sharedComponents],
  declarations: [...sharedComponents],
  providers: [...sharedServices]
})
export class SharedModule {
  /* static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        LayoutService,
        ThemeService,
      ]
    }
  } */
}
