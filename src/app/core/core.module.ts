import { NgModule, Optional, SkipSelf } from '@angular/core';

import { appearanceModules } from '../material';
import { SharedModule } from './../shared/shared.module';

import { coreComponents } from './components';
import { layoutComponents } from './layout';
import { coreServices } from './services';
import { MainContentComponent } from './layout/main-content/main-content.component';

@NgModule({
  declarations: [
    ...coreComponents,
    ...layoutComponents,
    MainContentComponent
  ],
  imports: [
    SharedModule,
    ...appearanceModules
  ],
  exports: [...layoutComponents],
  providers: [...coreServices]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('You should import core module only in the root module')
    }
  }

}
