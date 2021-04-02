import { RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { appearanceModules } from '../material';
import { SharedModule } from './../shared/shared.module';

import { coreComponents } from './components';
import { layoutComponents } from './layout';

import { LayoutService } from './services/layout.service';
import { ThemeService } from './services/theme.service';

@NgModule({
  declarations: [
    ...coreComponents,
    ...layoutComponents
  ],
  exports: [...layoutComponents],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ...appearanceModules
  ], providers: [LayoutService, ThemeService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('You should import core module only in the root module')
    }
  }

}
