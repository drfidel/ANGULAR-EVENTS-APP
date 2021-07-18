import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from "./nav/index";
import { appRoutes } from "./routes";
import { RouterModule } from '@angular/router';
import { CollapsibleWellComponent } from "./common/collapsible-well.component";
import { Error404Component } from "./errors/index";

import { AuthService } from "./user/index"

import { EventService,
         EventDetailsComponent,
         EventThumbnailComponent,
         EventsListComponent,
         CreateEventComponent,
         EventListResolver,
         EventRouteActivator,
         CreateSessionComponent,
         SessionListComponent,
         DurationPipe,
           } from "./events/index";

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    Error404Component,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    FormsModule,
    ReactiveFormsModule, 
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    EventService, 
    EventRouteActivator,
    EventListResolver,
    AuthService,
    {  provide: 'canDeactivateCreateEvent',
       useValue: checkDirtyState}],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
  }
