import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './core/layout/layout.component';
import { WellcomeComponent } from './core/components/wellcome/wellcome.component';

const routes: Routes = [{
  path: '', component: LayoutComponent, children: [
    { path: '', component: WellcomeComponent }
  ]
}]; @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
