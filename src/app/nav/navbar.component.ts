import { Component, OnInit } from '@angular/core';
import { EventService, ISession } from '../events';
import { AuthService } from '../user';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styles: [`
        .thumbnail { min-height: 210px;}
        .nav.navbar-nav {font-size: 15px;}
        #searchForm {margin-right: 100px;}
        @media (max-width: 1200px) {searchForm {display:none}}
        li > a.active { color: #F97924; }
    `]
})

export class NavBarComponent implements OnInit {

    searchTerm: string = "";
    foundSessions?:ISession[]

    constructor(public auth:AuthService, public eventService: EventService) { }

    ngOnInit() { }

    searchSessions(searchTerm:any){
        this.eventService.searchSessions(searchTerm).subscribe((sessions?: ISession[]) => {
            this.foundSessions = sessions
            //console.log(this.foundSessions)
        })
    }
}