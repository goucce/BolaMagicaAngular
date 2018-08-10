import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';  //LAS LLAVES se escriben asi porque estamos decostruyendo, un objeto.
import { PruebaComponent } from './home/prueba.components';
import { CofreAbiertoComponent } from './cofre-abierto/cofre-abierto.component';
import { CofreCerradoComponent } from './cofre-cerrado/cofre-cerrado.component';
import { HistorialComponent } from './historial/historial.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, //Aqui introducimos los modulos que vayamos a utilizar. La aplicacion está separada en modulos lógicos.
    PruebaComponent, 
    CofreAbiertoComponent, 
    CofreCerradoComponent,
    HistorialComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
