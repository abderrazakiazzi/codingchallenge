import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';
import { ShopService } from './services/shop.service';
import {HttpClientModule} from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './services/authentiGuard';
import { PreferedshopComponent } from './preferedshop/preferedshop.component';
import { NoopAnimationPlayer } from '@angular/animations';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShopComponent,
    DashboardComponent,
    PreferedshopComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationPlayer,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    MatDialogModule
 
  ],
  providers: [AuthGuard, ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
