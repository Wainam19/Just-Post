import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'post',
    loadChildren: () =>
      import('./post/post.module').then((m) => m.PostPageModule),
  },
  {
    path: 'comment',
    loadChildren: () =>
      import('./comment/comment.module').then((m) => m.CommentPageModule),
  },
  {
    path: 'company',
    loadChildren: () =>
      import('./company/index/index.module').then((m) => m.CompanyPageModule),
  },
  {
    path: 'staff',
    loadChildren: () =>
      import('./staff/index/index.module').then((m) => m.StaffPageModule),
  },
  {
    path: 'company-create',
    loadChildren: () =>
      import('./company/company-create/company-create.module').then(
        (m) => m.CompanyCreatePageModule
      ),
  },
  {
    path: 'staff-create',
    loadChildren: () =>
      import('./staff/staff-create/staff-create.module').then(
        (m) => m.StaffCreatePageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
