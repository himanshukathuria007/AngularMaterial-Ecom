import { Component, OnInit, ViewChild, AfterViewInit, DoCheck } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, AfterViewInit {
  results = [];
  panelOpenState = false;
  public displayedColumns = ['firstname', 'email', 'role', 'details', 'update', 'delete'
  ];
  public dataSource = new MatTableDataSource<user>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private adminservice: AdminService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): any {
    this.adminservice.getAllUsers().subscribe((data) => {
      // console.log(data)
      this.dataSource.data = data.users as user[];
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}

interface user {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
}