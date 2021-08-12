import { Component, OnInit } from '@angular/core';
import { EventService } from "./shared/event.service";


//import { ToastrService } from 'ngx-toastr';

import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/index';

////declare let toastr: ToastrService

@Component({
    //selector: 'events-list',
    templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit {
  
    events:any
    

  constructor (private eventService: EventService, private route:ActivatedRoute ) {
    //this.events = this.eventService.getEvents()
    
  }

  ngOnInit(){
      //this.events = this.eventService.getEvents().subscribe(events => { this.events =events})
      this.events = this.route.snapshot.data['events']
  }

    

    // handleEventClicked(data:any) {
    //     console.log('recieved', data)
    // }

}