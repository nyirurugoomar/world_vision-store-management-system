import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TechnicianLoginComponent } from './components/technician-login/technician-login.component';
import { StoreKeeperLoginComponent } from './components/store-keeper-login/store-keeper-login.component';
import { TechnicianPageComponent } from './components/technician-page/technician-page.component';
import { StoreKepperPageComponent } from './components/store-kepper-page/store-kepper-page.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemComponent } from './components/item/item.component';
import { HistoryComponent } from './components/history/history.component';
import { TechnicianComponent } from './components/technician/technician.component';
import { AddTechnicianComponent } from './components/add-technician/add-technician.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'app-technician-login', component:TechnicianLoginComponent},
  {path: 'app-store-keeper-login', component:StoreKeeperLoginComponent},
  
  {
    path: 'app-store-kepper-page', 
    component:StoreKepperPageComponent,
    children:[
      {path: '', component:ItemComponent},
      {path:'app-item', component:ItemComponent},
      {path: 'app-add-item', component:AddItemComponent},
      {path: 'app-history', component:HistoryComponent},
      {path: 'app-technician', component:TechnicianComponent},
      {path: 'app-add-technician', component:AddTechnicianComponent},
    ]
  },

  {
    path: 'app-technician-page', 
    component:TechnicianPageComponent,
     children:[
      {path: '', component:ItemComponent},
      {path:'app-item', component:ItemComponent},
      {path: 'app-history', component:HistoryComponent},
      
     ]
  },

  // {
  //   path: 'app-technician', 
  //   component:TechnicianComponent,
  //    children:[
  //     {path: 'app-add-technician', component:AddTechnicianComponent},
      
  //    ]
  // }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
