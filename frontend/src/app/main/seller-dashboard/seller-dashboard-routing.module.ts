import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SellerDashboardComponent } from "./seller-dashboard.component";
import { SellerLoginRegisterComponent } from "../seller-login-register/seller-login-register.component";
import { SellerProfileComponent } from "./seller-profile/seller-profile.component";
import { ProductsListComponent } from "./products-list/products-list.component";
import { SellerPaymentsComponent } from "./seller-payments/seller-payments.component";
import { SharedModule } from "./shared/shared.module";

const routes: Routes = [
  {
    path: "",
    component: SellerDashboardComponent,
    children: [
      { path: "sellerprofile", component: SellerProfileComponent },
      { path: "productlist", component: ProductsListComponent },
      { path: "sellerpayments", component: SellerPaymentsComponent },
    ],
  },
  {
    path: "",
    loadChildren: () =>
      import("./shared/shared.module").then((m) => m.SharedModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class SellerDashboardRoutingModule {}
