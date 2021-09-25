import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service'

@Directive({ selector: '[modal-trigger]' })

export class ModalTriggerDirective implements OnInit {

    private el: HTMLElement;
    @Input('modal-trigger') modalId!: string;
    
    constructor(refr: ElementRef, @Inject(JQ_TOKEN) private $ : any) {
        this.el = refr.nativeElement
     }

    ngOnInit(){
        this.el.addEventListener('click', e => {
            this.$(`#${this.modalId}`).modal({})  
        })
       
    }
}