import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  userUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }


  getAllUsers(): any {
    return this.http.get(`${this.userUrl}/fetchusers`);
  }

  getUser(id): any {
    return this.http.get(`${this.userUrl}/fetchsingleuser/:id`);
  }
}
