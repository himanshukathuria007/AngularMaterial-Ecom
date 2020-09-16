import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { LoginRegisterService } from 'src/app/service/login-register.service';
import {  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  role = '';
  constructor(private loginregisterService: LoginRegisterService) { }

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
  }

  ngDoCheck() {
    this.role = localStorage.getItem('role');
  }

  logout(): any {
    localStorage.removeItem('role');
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('firstname');
    this.role = '';
  }
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
}
