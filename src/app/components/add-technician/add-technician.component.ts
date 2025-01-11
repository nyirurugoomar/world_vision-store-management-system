import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TechnicianService } from '../../service/add-technician.service';
@Component({
  selector: 'app-add-technician',
  templateUrl: './add-technician.component.html',
  styleUrl: './add-technician.component.css'
})
export class AddTechnicianComponent {
  addTechnicianForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private technicianService: TechnicianService) {
    this.addTechnicianForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      occupation: ['', [Validators.required,]],
      contactNumber: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  addTechnician(){
    if(this.addTechnicianForm.value)
    this.technicianService.addTechnician(this.addTechnicianForm.value).subscribe({
     next:(val:any) => {
       alert("Technician successfully")
       this.addTechnicianForm.reset()
       this.router.navigate(['app-store-kepper-page/app-technician'])
     }
  })
  }

}
