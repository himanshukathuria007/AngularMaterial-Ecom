import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard.component';
import { NavbarModule } from '../navbar/navbar.module';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';


@NgModule({
  declarations: [UserDashboardComponent, UserSidebarComponent],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    NavbarModule
  ],
  exports: [UserDashboardComponent]
})
export class UserDashboardModule { }
