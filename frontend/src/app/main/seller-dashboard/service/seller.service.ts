import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  url = "http://localhost:3000/api";
  constructor(private http: HttpClient) {}

  sellerlogin(data: any): any {
    return this.http.post(`${this.url}/sellerlogin`, data).pipe(
      map((result: any) => {
        localStorage.setItem('token', 'Bearer ' + result.token);
        localStorage.setItem('id', result.id);
        localStorage.setItem('sellername', result.sellername);
        localStorage.setItem('selleremail', result.selleremail);

   
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


  sellerregister(data: any): any {
    return this.http.post(`${this.url}/sellerregister`, data);
  }


}
