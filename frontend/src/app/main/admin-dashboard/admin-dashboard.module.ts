import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { NavbarModule } from '../navbar/navbar.module';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { UserListComponent } from './user-list/user-list.component';
import { SellerListComponent } from './seller-list/seller-list.component';
import { FlowChartComponent } from './flow-chart/flow-chart.component';

@NgModule({
  declarations: [AdminDashboardComponent, AdminSidebarComponent, UserListComponent, SellerListComponent, FlowChartComponent],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    NavbarModule,
    AngularMaterialModule,
  ],
  exports:[AdminSidebarComponent]
})
export class AdminDashboardModule { }
