import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { LoginRegisterService } from '../service/login-register.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
  constructor(private loginregisterservice: LoginRegisterService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    let flag = false;
    if (this.loginregisterservice.isLoggedIn()) {
      console.log('User authenticated');
      flag = true;
    } else {
      console.log('User not authenticated');
      this.router.navigate(['../login']);
    }
    return flag;
  }
}
