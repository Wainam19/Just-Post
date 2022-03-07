import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffPage } from './index.page';

const routes: Routes = [
  {
    path: '',
    component: StaffPage,
  },
  {
    path: 'staff-create',
    loadChildren: () =>
      import('../staff-create/staff-create.module').then(
        (m) => m.StaffCreatePageModule
      ),
  },
  {
    path: 'staff-detail/:id',
    loadChildren: () =>
      import('../staff-detail/staff-detail.module').then(
        (m) => m.StaffDetailPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffPageRoutingModule {}
