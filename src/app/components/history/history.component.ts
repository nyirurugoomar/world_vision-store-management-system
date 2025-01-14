import { Component} from '@angular/core';
import { GetTechnicianService } from '../../service/get-technician.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
todayItems: any[] = []

constructor(private getTechnicianService: GetTechnicianService){}


ngOnInit(): void {
  this.fetchTechnicians(); // Fetch technicians when component initializes
}

fetchTechnicians(): void{
  this.getTechnicianService.getTechnicians().subscribe({
    next:(data) =>{
      this.todayItems = data;
    },
    error: (error) => {
      console.error('Error fetching technicians:', error); // Log error
    }
  })
}


}
