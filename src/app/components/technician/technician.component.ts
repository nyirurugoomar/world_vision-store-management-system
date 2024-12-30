import { Component } from '@angular/core';

@Component({
  selector: 'app-technician',
  templateUrl: './technician.component.html',
  styleUrl: './technician.component.css'
})
export class TechnicianComponent {

  technicians = [
    {
      position: "Technician Position",
      name: "James Bond",
      id: "001",
      contact: "077 34 76 300"
    },
    {
      position: "Junior Technician",
      name: "Alice Smith",
      id: "002",
      contact: "077 88 44 200"
    },
    {
      position: "Senior Technician",
      name: "John Doe",
      id: "003",
      contact: "077 12 34 567"
    },
    {
      position: "Senior Technician",
      name: "John Doe",
      id: "003",
      contact: "077 12 34 567"
    },
    {
      position: "Senior Technician",
      name: "John Doe",
      id: "004",
      contact: "077 12 34 567"
    }
  ];
}
