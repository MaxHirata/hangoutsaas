import { Routes, RouterModule } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventListComponent } from './event-list/event-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { WelcomeComponent } from './welcome/welcome.component';  
import { LoginComponent } from './login/login.component'; 

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'events/create', component: CreateEventComponent},
    { path: 'events', component: EventListComponent },
    { path: 'events/:id', component: ViewEventComponent},
    { path: 'login', component: LoginComponent}
];

export const AppRoute = RouterModule.forRoot(routes);
