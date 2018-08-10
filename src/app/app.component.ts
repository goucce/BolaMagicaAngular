import { Component } from '@angular/core';
import { templateJitUrl } from '../../node_modules/@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})

export class AppComponent {
  pregunta: string='';
  title: string = 'bola8';
  //Creamos un string vacio donde vamos a introducir la respuesta del arrayRespuestas
  //Esta es la que le vamos a tener que enviar al hijo.
  selected: string = ''; 

   //Creacion de un array donde dentro se encontraran strings, con las diferentes frases.
   arrayRespuestas: Array<string> = 
    ['Ni de coña',
     'Prueba suerte a la proxima',
    'Mañana ocurrirá',
     'Yo si fuera tu lo dejaría estar',
    ];
    
  //Creamos un array donde dentro encontraremos otro array de strings, ya que vamos a guardar 
  //En la posición 0 la pregunta, y en la posicion 1 la respuesta.  
 arrayHistorialRespuestas: Array<Array<string>> = [ ]; 

   getRandomResponse() {  //funcion que:

    //Selecciona el string vacio (el cual vamos a llamar desde html) y con la funcion lo vamos 
    //a rellenar de una opcion random del primer array
    this.selected = this.arrayRespuestas[ Math.floor(Math.random()*this.arrayRespuestas.length)] ;

    //Ahora vamos a pushear al arry vacio con la acumulacion de las respuestas, seleccionando 
    //que la primera sea la pregunta (0) y la segunda sea la respuesta (1)
    this.arrayHistorialRespuestas.push( [  this.pregunta,this.selected] );
    //finalmente el input lo vaciamos, para que no tenga la pregunta anterior
    this.pregunta = '';


    //Al llamar a una funcion no es obligatorio que realice un return, simplemente que te aparezcan las accioens a tomar
  };

  keyup(key){ //key es donde se guarda el evento del input del html.
    if(key.keyCode === 13 ){ //El keyCode funcione con la tecla del enter y listo.
      this.getRandomResponse();
    };
  };
    

}



