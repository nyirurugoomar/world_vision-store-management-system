import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreKeeperLoginComponent } from './components/store-keeper-login/store-keeper-login.component';
import { TechnicianLoginComponent } from './components/technician-login/technician-login.component';
import { LoginComponent } from './components/login/login.component';
import { TechnicianPageComponent } from './components/technician-page/technician-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StoreKeeperLoginComponent,
    TechnicianLoginComponent,
    LoginComponent,
    TechnicianPageComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
