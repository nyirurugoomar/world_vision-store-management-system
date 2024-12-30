import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-store-kepper-page',
  templateUrl: './store-kepper-page.component.html',
  styleUrl: './store-kepper-page.component.css'
})
export class StoreKepperPageComponent {
  sidebarButtons = [
    { label: 'Item', icon: '', route: 'app-item' },
    { label: 'Add Items', icon: '', route: 'app-add-item' },
    { label: 'History', icon: '', route: 'app-history' },
    { label: 'Technicians', icon: '', route: 'app-technician' },
    { label: 'Add technician', icon: '', route: 'app-add-technician' },
    { label: 'Disable', icon: '', route: '#' },
    { label: 'Manage Store', icon: '', route: '#' },
    
  ];
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
