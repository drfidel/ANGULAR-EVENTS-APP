import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared';


@Component({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">    
        <h2>{{event.name | uppercase}}</h2>
            <div><img src="{{event.imageUrl}}" alt={{event.name}} class="event-image"></div>
        <div>Date:  {{event.date|date:'shortDate'}}</div>
        <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">Time:  {{event.time}}
                <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price:  {{event.Price|currency:'USD'}}</div>
        <div>
            <span>Location: {{event.location.address}}</span>
            <span class="pad-left">{{event.location.City}},{{event.location.Country}} </span>  
        </div>
        <!-- <div>
            <button class="btn btn-primary" (click)="handleClickMe()">Click Me</button>
        </div> -->
    </div>`,
    styles: [`
        .green {color: #003300 !important;}
        .bold { font-weight: bold;}
        .pad-left { margin-left: 10px; }
        .event-image { height: 100px; }
    `]
        /* .well div { color: #bbb; }] */
})

export class EventThumbnailComponent {
    @Input()
    event: any
    // @Output() eventClick = new EventEmitter()

    // handleClickMe(){
    //     this.eventClick.emit(this.event.name)
    // }
    
    getStartTimeStyle():any {
        if(this.event && this.event.time === '8:00 am')
            return {color: '#003300' ,'font-weight': 'bold'}
        return {}
    }
}