import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  url = "http://localhost:3000/api";
  constructor(private http: HttpClient) {}

  login(data: any): any {
    return this.http.post(`${this.url}/login`, data).pipe(
      map((result: any) => {
        localStorage.setItem('token', 'Bearer ' + result.token);
        localStorage.setItem('role', result.role);
        localStorage.setItem('id', result.id);
        localStorage.setItem('firstname', result.firstname);
   
        return result;
      })
    );
  }

   // Getting token from localsorage
   getToken(): any {
    return localStorage.getItem('token') ? localStorage.getItem('token') : '';
  }


   // Checking user session
   isLoggedIn(): boolean {
    if (this.getToken() !== '') {
      return true;
    }
    return false;
  }

  signup(data: any): any {
    return this.http.post(`${this.url}/register`, data);
  }

}
