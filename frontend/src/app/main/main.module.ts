import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import{NavbarModule} from '../main/navbar/navbar.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';
import { SellerLoginRegisterComponent } from './seller-login-register/seller-login-register.component';

@NgModule({
  declarations: [MainComponent, LoginComponent, SignupComponent, SellerLoginRegisterComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    NavbarModule,
    AngularMaterialModule,
    RouterModule,
    ReactiveFormsModule,
  
  ],
  exports:[MainComponent]
})
export class MainModule { }
