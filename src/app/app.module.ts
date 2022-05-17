import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'


import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { ChoixclientComponent } from './choixclient/choixclient.component';
import { ChoixclientService } from './choixclient/choixclient.service';
import { appRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CarService } from './car/car.service';
import { CustomiserComponent } from './customiser/customiser.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';




//First change
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarComponent,
    ChoixclientComponent,
    CustomiserComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    appRoutingModule   
  ],
  providers: [
    ChoixclientService,
    CarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
