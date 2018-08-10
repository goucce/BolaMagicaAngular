import { Component } from '@angular/core';

@Component({
    selector: 'prueba',
    template: `<div ng-click="log" [class]= "hola" > prueba {{hoal}} </div>`  
    //Lo que hay dentro de {{}} se convertirá si o si en string
    //[class] si que devuelve un objeto, no tiene la necsiada dde convertirlo en un string
})

export class PruebaComponent{
    hola : string;
    constructor(){
        this.hola = "caracola"
    }
    log(){
        console.log('yep')
    }



}