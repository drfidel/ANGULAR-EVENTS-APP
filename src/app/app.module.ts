import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from "./nav/index";
import { appRoutes } from "./routes";
import { RouterModule } from '@angular/router';
import { Error404Component } from "./errors/index";

import { JQ_TOKEN,TOASTR_TOKEN,Toastr, CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective} from "./common/index";

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
         UpvoteComponent,
         VoterService,
           } from "./events/index";

let toastr: Toastr = (window as any)['toastr'];
let jQuery = (window as any)['$'];


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
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    FormsModule,
    ReactiveFormsModule, 
    //ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    EventService, 
    { provide: TOASTR_TOKEN, 
      useValue: toastr},
    { provide: JQ_TOKEN, 
        useValue: jQuery},
    EventRouteActivator,
    EventListResolver,
    VoterService,
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
