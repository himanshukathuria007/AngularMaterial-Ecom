import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
  firstname;
  role;
  constructor() { }

  ngOnInit(): void {
    this.firstname = localStorage.getItem('firstname');
    this.role = localStorage.getItem('role');
  }


}
