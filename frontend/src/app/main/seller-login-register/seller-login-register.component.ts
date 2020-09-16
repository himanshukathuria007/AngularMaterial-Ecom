import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/main/seller-dashboard/service/seller.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-seller-login-register',
  templateUrl: './seller-login-register.component.html',
  styleUrls: ['./seller-login-register.component.css']
})
export class SellerLoginRegisterComponent implements OnInit {
  loginForm: FormGroup;
  signupForm: FormGroup;
  selleremail: string = "";
  sellerpassword: string = "";
  hide = true;
  constructor(private fb: FormBuilder, private sellerservice: SellerService , private router: Router) {
    this.loginForm = this.fb.group({
      selleremail: new FormControl(),
      sellerpassword: new FormControl()
    });
    this.signupForm = this.fb.group({
      sellername: new FormControl(),
      selleremail: new FormControl(),
      sellernumber: new FormControl(),
      sellerpassword: new FormControl(),
    });
  }

  ngOnInit(): void {
  }

  login(loginForm) {
    console.log(loginForm.value);
    this.sellerservice.sellerlogin(loginForm.value).subscribe((response) => {
      console.log('response', response)
      if (response.status === true) {
        
          this.router.navigate(['../sellerdashboard']);
        }
        
      
      else {
        alert('Incorrect');
        this.router.navigate(['seller']);
      }
      console.log(response.status);
      loginForm.reset();
    });
  }

  PostData(signupForm){
    console.log(signupForm.value);
    this.sellerservice.sellerregister(signupForm.value).subscribe(() => {
      console.log('Registered successfull');
      signupForm.reset();
    });
  }

}
