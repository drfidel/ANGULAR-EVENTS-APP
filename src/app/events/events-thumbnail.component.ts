import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">    
        <h2>{{event.name}}</h2>
            <div><img src="{{event.imageUrl}}" alt=""></div>
        <div>Date:  {{event.date}}</div>
        <div>Time:  {{event.time}}</div>
        <div>Price:  \${{event.Price}}</div>
        <div>
            <span>Location: {{event.location.address}}</span>
            <span class="pad-left">{{event.location.City}},{{event.location.Country}} </span>  
        </div>
        <!-- <div>
            <button class="btn btn-primary" (click)="handleClickMe()">Click Me</button>
        </div> -->
    </div>`,
    styles: [`
        .pad-left { margin-left: 10px; }`]
        /* .well div { color: #bbb; }] */
})

export class EventThumbnailComponent {
    @Input() event:any
    // @Output() eventClick = new EventEmitter()

    // handleClickMe(){
    //     this.eventClick.emit(this.event.name)
    // }
    
}