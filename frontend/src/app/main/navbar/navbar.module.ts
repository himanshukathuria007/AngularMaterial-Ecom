import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { MainRoutingModule } from '../main-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    MainRoutingModule,
    MatToolbarModule,
  
  ],
  exports:[NavbarComponent]
})
export class NavbarModule { }
