import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './common/body/body.component';
import { SidenavComponent } from './common/sidenav/sidenav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SublevelMenuComponent } from './common/sidenav/sublevel-menu.component';
import { TopbarComponent } from './common/topbar/topbar.component';
import { DropdownModule } from 'primeng/dropdown';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    SublevelMenuComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DropdownModule,
    BadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
