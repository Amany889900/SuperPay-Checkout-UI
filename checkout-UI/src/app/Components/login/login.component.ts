import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { 
  loginForm: FormGroup;
  
  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router, private http: HttpClient) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['',[Validators.required]]
    });
  } 

  onLogin(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.apiService.login(email, password).subscribe(response => {
        if (response.success) {
          alert('Successful Login');
          this.router.navigate(['/dashboard']);
        } else {
          alert('Invalid Credentials');
        }
      });
    }
  }
}
