import { Component } from '@angular/core';

@Component({
  selector: 'app-store-kepper-page',
  templateUrl: './store-kepper-page.component.html',
  styleUrl: './store-kepper-page.component.css'
})
export class StoreKepperPageComponent {
  items = [
    {
      id: 'IT 009',
      name: 'Hammer',
      quantity: 50,
      status: 'In-stock',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 'IT 010',
      name: 'Screwdriver',
      quantity: 0,
      status: 'Out-of-stock',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 'IT 011',
      name: 'Wrench',
      quantity: 10,
      status: 'Low-stock',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 'IT 012',
      name: 'chair',
      quantity: 10,
      status: 'Low-stock',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 'IT 012',
      name: 'chair',
      quantity: 10,
      status: 'Low-stock',
      image: 'https://via.placeholder.com/150'
    }

  ];
}
