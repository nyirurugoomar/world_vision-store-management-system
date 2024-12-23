import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TechnicianLoginComponent } from './components/technician-login/technician-login.component';
import { StoreKeeperLoginComponent } from './components/store-keeper-login/store-keeper-login.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'app-technician-login', component:TechnicianLoginComponent},
  {path: 'app-store-keeper-login', component:StoreKeeperLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
