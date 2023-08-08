import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsModuleRoutingModule } from './reports-module-routing.module';
import { ReportsModuleComponent } from './reports-module.component';


@NgModule({
  declarations: [
    ReportsModuleComponent
  ],
  imports: [
    CommonModule,
    ReportsModuleRoutingModule
  ]
})
export class ReportsModuleModule { }
