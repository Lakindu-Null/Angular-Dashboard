import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'volume-type', loadChildren: () => import('./volume-type/volume-type.module').then(m => m.VolumeTypeModule) },
  { path: 'colors', loadChildren: () => import('./colors/colors.module').then(m => m.ColorsModule) },
  { path: 'category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) },
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: 'branch', loadChildren: () => import('./branch/branch.module').then(m => m.BranchModule) },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupModuleRoutingModule { }
