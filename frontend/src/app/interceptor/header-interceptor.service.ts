
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { LoginRegisterService } from '../service/login-register.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptorService implements HttpInterceptor{
  constructor(private loginregisterservice: LoginRegisterService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    const header = req.headers.set('authorization', this.loginregisterservice.getToken());
    const request = req.clone({
      headers: header,
    });
    return next.handle(request);
  }
}
