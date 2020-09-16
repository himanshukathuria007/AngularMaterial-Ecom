import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRegisterService } from 'src/app/service/login-register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  signupForm: FormGroup;
  Email: string = "";
  Password: string = "";
  hide = true;
  role = '';
  constructor(private fb: FormBuilder, private loginregisterService: LoginRegisterService, private router: Router) {
    this.loginForm = this.fb.group({
      email: new FormControl(),
      password: new FormControl()
    });
    this.signupForm = this.fb.group({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      role: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  login(loginForm) {
    console.log(loginForm.value);
    this.loginregisterService.login(loginForm.value).subscribe((response) => {
      console.log('response', response)
      if (response.status === true) {
        this.role = localStorage.getItem('role');
        if (this.role === 'admin') {
          this.router.navigate(['../admindashboard']);
        }
        if (this.role === 'user') {
          this.router.navigate(['../userdashboard']);
        }
      }
      else {
        alert('Incorrect');
        this.router.navigate(['']);
      }
      console.log(response.message);
      loginForm.reset();
    });
  }

  PostData(signupForm){
    console.log(signupForm.value);
    this.loginregisterService.signup(signupForm.value).subscribe(() => {
      console.log('Registered successfull');
      signupForm.reset();
    });
  }

}
