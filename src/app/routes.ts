import { Routes } from "@angular/router";
import { Error404Component } from "./errors/index";

import { 
    EventDetailsComponent,
    EventsListComponent,
    CreateEventComponent,
    EventListResolver,
    CreateSessionComponent,
    EventResolver

      } from "./events/index";


export const appRoutes:Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events', component: EventsListComponent, resolve: {events:EventListResolver}},
    {path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver}}, 
    {path: '404', component: Error404Component},   
    {path: 'events/session/new', component: CreateSessionComponent},                                                                                                               
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {
        path: 'user', 
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
    }
]