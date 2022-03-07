import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyPage } from './index.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyPage,
  },
  {
    path: 'company-create',
    loadChildren: () =>
      import('../company-create/company-create.module').then(
        (m) => m.CompanyCreatePageModule
      ),
  },
  {
    path: 'company-detail/:id',
    loadChildren: () =>
      import('../company-detail/company-detail.module').then(
        (m) => m.CompanyDetailPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyPageRoutingModule {}
