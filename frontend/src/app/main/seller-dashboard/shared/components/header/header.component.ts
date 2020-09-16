import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SellerService } from '../../../service/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private sellerservice:SellerService,private router:Router) { }

  ngOnInit(): void {
  }

  logout(): any {

    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('sellername');
    localStorage.removeItem('selleremail');

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
