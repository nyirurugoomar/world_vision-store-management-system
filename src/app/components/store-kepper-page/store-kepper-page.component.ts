import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-store-kepper-page',
  templateUrl: './store-kepper-page.component.html',
  styleUrl: './store-kepper-page.component.css'
})
export class StoreKepperPageComponent {
  sidebarButtons = [
    { label: 'Item', icon: 'item_icon.svg', route: 'app-item' },
    { label: 'Add Items', icon: 'Plus_icon.svg', route: 'app-add-item' },
    { label: 'History', icon: 'history2.svg', route: 'app-history' },
    { label: 'Technicians', icon: 'technician_icon.svg', route: 'app-technician' },
    { label: 'Add technician', icon: 'Plus_icon.svg', route: 'app-add-technician' },
    { label: 'Disable', icon: 'Disable_icon.svg', route: '#' },
    { label: 'Manage Store', icon: 'Manage_icon.svg', route: '#' },
    
  ];

  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }
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
  @Input() buttons: { label: string; icon: string; route: string }[] = [];}
