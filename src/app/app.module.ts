import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreKeeperLoginComponent } from './components/store-keeper-login/store-keeper-login.component';
import { TechnicianLoginComponent } from './components/technician-login/technician-login.component';
import { LoginComponent } from './components/login/login.component';
import { TechnicianPageComponent } from './components/technician-page/technician-page.component';
import { FormsModule } from '@angular/forms';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { StoreKepperPageComponent } from './components/store-kepper-page/store-kepper-page.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemComponent } from './components/item/item.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HistoryComponent } from './components/history/history.component';
@NgModule({
  declarations: [
    AppComponent,
    StoreKeeperLoginComponent,
    TechnicianLoginComponent,
    LoginComponent,
    TechnicianPageComponent,
    PopUpComponent,
    StoreKepperPageComponent,
    AddItemComponent,
    ItemComponent,
    SidebarComponent,
    HistoryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
