import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesModuleRoutingModule } from './sales-module-routing.module';
import { SalesModuleComponent } from './sales-module.component';


@NgModule({
  declarations: [
    SalesModuleComponent
  ],
  imports: [
    CommonModule,
    SalesModuleRoutingModule
  ]
})
export class SalesModuleModule { }
