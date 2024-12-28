import { Component,inject,Input } from '@angular/core';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-technician-page',
  templateUrl: './technician-page.component.html',
  styleUrls: ['./technician-page.component.html'],
})
export class TechnicianPageComponent {

  constructor(private _dialog: MatDialog){}

  openDialog(){
    this._dialog.open(PopUpComponent)
  }

  // technician-dashboard.component.ts
sidebarButtons = [
  { label: 'Items', icon: '', route: 'app-item' },
  { label: 'History', icon: '', route: 'app-history' },
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
    }
  ];

  @Input() buttons: { label: string; icon: string; route: string }[] = [];


}
