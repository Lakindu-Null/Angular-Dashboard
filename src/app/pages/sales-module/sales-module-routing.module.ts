import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'grn', loadChildren: () => import('./grn/grn.module').then(m => m.GrnModule) },
  { path: 'stock-transfer', loadChildren: () => import('./stock-transfer/stock-transfer.module').then(m => m.StockTransferModule) },
  { path: 'invoice', loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule) },
  { path: 'invoice-reprint', loadChildren: () => import('./invoice-reprint/invoice-reprint.module').then(m => m.InvoiceReprintModule) },
  { path: 'sales-return', loadChildren: () => import('./sales-return/sales-return.module').then(m => m.SalesReturnModule) },
  { path: 'sales-return-reprint', loadChildren: () => import('./sales-return-reprint/sales-return-reprint.module').then(m => m.SalesReturnReprintModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesModuleRoutingModule { }
