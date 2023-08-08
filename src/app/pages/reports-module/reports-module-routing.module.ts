import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'sales-commision', loadChildren: () => import('./sales-commision/sales-commision.module').then(m => m.SalesCommisionModule) },
  { path: 'current-stock', loadChildren: () => import('./current-stock/current-stock.module').then(m => m.CurrentStockModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsModuleRoutingModule { }
