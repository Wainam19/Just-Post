import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyCreatePage } from './company-create.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyCreatePageRoutingModule {}
