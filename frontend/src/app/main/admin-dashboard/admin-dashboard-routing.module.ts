import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminDashboardComponent } from "./admin-dashboard.component";
import { UserListComponent } from "./user-list/user-list.component";
import { AuthguardService } from "src/app/auth-guard/authguard.service";
import { FlowChartComponent } from "./flow-chart/flow-chart.component";
import { SellerListComponent } from "./seller-list/seller-list.component";

const routes: Routes = [
  {
    path: "",
    component: AdminDashboardComponent,
    canActivate: [AuthguardService],
    children: [
      {
        path: "",
        redirectTo: 'userlist',
        // canActivate: [AuthguardService],
      },
      {
        path: "userlist",
        component: UserListComponent,
        // canActivate: [AuthguardService],
      },
      {
        path: "flowchart",
        component: FlowChartComponent,
        // canActivate: [AuthguardService],
      },
      {
        path: "sellerlist",
        component: SellerListComponent,
        // canActivate: [AuthguardService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDashboardRoutingModule { }
