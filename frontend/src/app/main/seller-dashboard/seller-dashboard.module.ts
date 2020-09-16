import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerDashboardRoutingModule } from './seller-dashboard-routing.module';
import { SellerDashboardComponent } from './seller-dashboard.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { SellerProfileComponent } from './seller-profile/seller-profile.component';
import { SellerPaymentsComponent } from './seller-payments/seller-payments.component';
import { SharedModule } from './shared/shared.module';    
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SellerDashboardComponent, ProductsListComponent, SellerProfileComponent, SellerPaymentsComponent],
  imports: [
    CommonModule,
    SellerDashboardRoutingModule,SharedModule,AngularMaterialModule, ReactiveFormsModule
  ]
})
export class SellerDashboardModule { }



                                   
