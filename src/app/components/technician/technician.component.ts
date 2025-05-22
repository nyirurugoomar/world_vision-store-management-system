import { Component } from '@angular/core';
import { GetTechnicianService } from '../../service/get-technician.service';
import { TechnicianService } from '../../service/add-technician.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-technician',
  templateUrl: './technician.component.html',
  styleUrl: './technician.component.css'
})
export class TechnicianComponent {
  technicians: any[] = [];
  editForm: FormGroup;
  selectedTechnicianId: string | null = null;
  isEditing: boolean = false;

  constructor(
    private getTechnicianService: GetTechnicianService,
    private technicianService: TechnicianService,
    private fb: FormBuilder
  ) {
    this.editForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      occupation: ['', [Validators.required]],
      contactNumber: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.fetchTechnicians();
  }

  fetchTechnicians(): void {
    this.getTechnicianService.getTechnicians().subscribe({
      next: (data) => {
        this.technicians = data;
      },
      error: (error) => {
        console.error('Error fetching technicians:', error);
      }
    });
  }

  editTechnician(technicianId: string): void {
    this.selectedTechnicianId = technicianId;
    // Use getTechnicianById instead of getTechnicians
    this.technicianService.getTechnicianById(technicianId).subscribe({
      next: (technician) => {
        this.editForm.patchValue({
          name: technician.name,
          occupation: technician.occupation,
          contactNumber: technician.contactNumber,
          password: technician.password
        });
        this.isEditing = true;
      },
      error: (error) => {
        console.error('Error fetching technician:', error);
        alert('Failed to load technician data');
      }
    });
  }

  closeEditDialog(): void {
    this.isEditing = false;
    this.selectedTechnicianId = null;
    this.editForm.reset();
  }

  updateTechnician(): void {
    if (this.editForm.valid && this.selectedTechnicianId) {
      const technicianData = this.editForm.value;
      this.technicianService.updateTechnicianById(this.selectedTechnicianId, technicianData).subscribe({
        next: (response) => {
          alert('Technician updated successfully');
          this.closeEditDialog();
          this.fetchTechnicians(); // Refresh the list
        },
        error: (error) => {
          console.error('Error updating technician:', error);
          alert('Failed to update technician');
        }
      });
    }
  }
}