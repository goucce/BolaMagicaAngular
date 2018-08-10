import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent {
  
  @Input() arrayHistorialHijo: Array<Array<string>>;
  

  //Esta variable es el array donde se tienen que guardad 
  //tanto la pregunta como la respuesta
  // arrayHistorialRespuestas: Array<Array<string>> = [ ]; 
  
  //  pushear () {
  //   this.arrayHistorialRespuestas.push( [  this.ask,this.question] );
  // }
  
  constructor(){
    // this.arrayHistorialRespuestas.push( [  this.ask,this.question] );
    // console.log(this.arrayHistorialRespuestas);
  }
  

}
