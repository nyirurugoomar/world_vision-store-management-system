import { Component } from '@angular/core';
import { GetTechnicianService } from '../../service/get-technician.service';

@Component({
  selector: 'app-technician',
  templateUrl: './technician.component.html',
  styleUrl: './technician.component.css'
})
export class TechnicianComponent {
technicians: any[] = []

constructor(private getTechnicianService: GetTechnicianService){}

ngOnInit(): void {
  this.fetchTechnicians(); // Fetch technicians when component initializes
}

fetchTechnicians(): void{
  this.getTechnicianService.getTechnicians().subscribe({
    next:(data) =>{
      this.technicians = data;
    },
    error: (error) => {
      console.error('Error fetching technicians:', error); // Log error
    }
  })
}
}
