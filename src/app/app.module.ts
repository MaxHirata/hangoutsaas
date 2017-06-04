import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventListComponent } from './event-list/event-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { NavbarComponent } from './navbar/navbar.component';

import {EventService} from "./event.service"; 
import {AppRoute} from './app-route';
import { LoginComponent } from './login/login.component'; 

@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent,
    EventListComponent,
    WelcomeComponent,
    ViewEventComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoute
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
