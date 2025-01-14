import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {


  constructor(private router: Router) {}

  @Input() buttons:{label: string; icon: string; route: string}[] = [];


  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
