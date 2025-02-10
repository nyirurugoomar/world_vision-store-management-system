import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginTechnicianService } from '../../service/login-technician.service';
@Component({
  selector: 'app-technician-login',
  templateUrl: './technician-login.component.html',
  styleUrl: './technician-login.component.css'
})
export class TechnicianLoginComponent {
  loginTechnicianForm:FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private loginTechnicianService: LoginTechnicianService) {
      this.loginTechnicianForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        password: ['', [Validators.required]]
    })
  }

  loginTechnician() {
    if (this.loginTechnicianForm.valid) {
      const formData = this.loginTechnicianForm.value;  
  
      this.loginTechnicianService.loginTechnician(formData).subscribe({
        next: (response) => {
          alert("Login Successfully");
          this.loginTechnicianForm.reset();
          this.router.navigate(['/app-technician-page']);
        },
        error: (error) => {
          console.error('Login failed:', error);
          alert('Login failed. Please check the credentials.');
        }
      });
    } else {
      alert('Please fill out the form correctly.');
    }
  }

}
