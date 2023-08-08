import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
    
  { path: 'setup-module', loadChildren: () => import('./pages/setup-module/setup-module.module').then(m => m.SetupModuleModule) },
  { path: 'sales-module', loadChildren: () => import('./pages/sales-module/sales-module.module').then(m => m.SalesModuleModule) },
  { path: 'reports-module', loadChildren: () => import('./pages/reports-module/reports-module.module').then(m => m.ReportsModuleModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
