import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SellerLoginRegisterComponent } from './seller-login-register/seller-login-register.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'seller', component: SellerLoginRegisterComponent },
  {
    path: 'userdashboard', loadChildren: () =>
      import('./user-dashboard/user-dashboard.module').then((m) => m.UserDashboardModule),
  },
  {
    path: 'admindashboard', loadChildren: () =>
      import('./admin-dashboard/admin-dashboard.module').then((m) => m.AdminDashboardModule),
  },
  {
    path: 'sellerdashboard', loadChildren: () =>
      import('./seller-dashboard/seller-dashboard.module').then((m) => m.SellerDashboardModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
