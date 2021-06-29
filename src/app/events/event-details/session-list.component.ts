import { Component, Input } from '@angular/core';
import { ISession } from "../shared/index";

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})

export class SessionListComponent {
    constructor() { }


    @Input() sessions:ISession[] | undefined
}