import { Component } from "@angular/core";

@Component({
selector: 'mi-componente',
templateUrl: './mi-component.component.html'

}) //no cerrar con ; y obligatoriamente un minimo de 2 propiedades

export class MiComponente{
  
  public titulo: string;
  public comentario: string;
  public year: number;

constructor(){

  this.titulo = 'hola mundo soy Mi componente';
  this.comentario = 'Hola soy un comentario';
  this.year = 2022;

    console.log('componente mi-componente cargado');
}

}