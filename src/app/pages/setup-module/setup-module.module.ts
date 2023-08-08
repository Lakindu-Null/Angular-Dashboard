import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetupModuleRoutingModule } from './setup-module-routing.module';
import { SetupModuleComponent } from './setup-module.component';


@NgModule({
  declarations: [
    SetupModuleComponent
  ],
  imports: [
    CommonModule,
    SetupModuleRoutingModule
  ]
})
export class SetupModuleModule { }
