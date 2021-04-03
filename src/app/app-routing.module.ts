import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WellcomeComponent } from './core/components';
import { LayoutComponent } from './core/layout';
import { UnderConstructionComponent } from './shared/components';
import { NotFoundComponent } from './shared/components';

const routes: Routes = [{
  path: '', component: LayoutComponent, children: [
    { path: '', component: WellcomeComponent, data: { title: 'Wellcome Page' } },
    { path: 'on-development', component: UnderConstructionComponent, data: { title: 'Under Development Page' } },
    { path: '404', component: NotFoundComponent, data: { title: 'Page Not Found' } },
  ]
}]; @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
