import { Component} from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  todayItems = [
    { technicianId: 'ABC 23', itemId: '12 987', itemName: 'Hammer', quantity: 7535, time: '12.00 PM' },
    { technicianId: 'ABC 45', itemId: '25 455', itemName: '22 hammer', quantity: 5724, time: '12.00 PM' },
    { technicianId: 'ABC 34', itemId: '12 987', itemName: '36 hammer', quantity: 2775, time: '12.00 PM' },
    { technicianId: 'ABC 44', itemId: '34 567', itemName: '14 key', quantity: 2275, time: '12.00 PM' },
    { technicianId: 'ABC 54', itemId: '12 324', itemName: '5 key', quantity: 2427, time: '12.00 PM' },
    { technicianId: 'ABC 33', itemId: '12 456', itemName: '10 key', quantity: 2578, time: '12.00 PM' },
    { technicianId: 'ABC 32', itemId: '23 546', itemName: '23 key', quantity: 2757, time: '12.00 PM' },
    { technicianId: 'ABC 43', itemId: '34 567', itemName: '43 key', quantity: 3757, time: '12.00 PM' },
    { technicianId: 'ABC 21', itemId: '23 456', itemName: '41 nut', quantity: 2474, time: '12.00 PM' },
  ];


}
