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

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
