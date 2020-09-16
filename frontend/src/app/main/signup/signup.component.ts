import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, NgForm } from '@angular/forms';
import { LoginRegisterService } from 'src/app/service/login-register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm:FormGroup;
FirstName:string="";
LastName:string="";
Email:string="";
Password:string="";
  constructor(private fb:FormBuilder, private loginregisterService: LoginRegisterService, private router: Router) { 
    this.signupForm = this.fb.group({
      firstname:new FormControl(),
      lastname:new FormControl(),
      email:new FormControl(),
      password:new FormControl(),
      role:new FormControl()
    });
  }

  ngOnInit(): void {
  }
  
  PostData(signupForm){
    console.log(signupForm.value);
    this.loginregisterService.signup(signupForm.value).subscribe(() => {
      this.router.navigate(['login']);
      console.log('Registered successfull');
    });
    signupForm.reset();
  }
}
