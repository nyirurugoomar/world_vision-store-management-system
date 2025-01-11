import { Component,OnInit } from '@angular/core';
import { GetItemService } from '../../service/get-item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  items: any[] = [];

  constructor(private getItemService:GetItemService) { }

  ngOnInit(): void {
    this.fetchItems(); // Fetch items when component initializes
  }

  fetchItems(): void{
    this.getItemService.getItem().subscribe({
      next:(data) =>{
        this.items = data;
      },
      error: (error) => {
        console.error('Error fetching items:', error); // Log error
      }
    })
  }
}
