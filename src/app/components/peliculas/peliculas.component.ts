import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
//importamos el servicio
import { PeliculaService } from 'src/app/services/peliculas.service';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
   //en el decorador de component pasamos como provider el servicio
  //cuando cargamos el servicio hay que reiniciar la ejecucion
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit {

  public titulo: string;
  public mostrarPeliculas: boolean;
  public peliculas: Array<Pelicula>;
  public favorita: any;
  public fecha: any;

  constructor(
    //crear en el constructor una propiedad para el servicio, siempre se definen con un _

private _peliculaService: PeliculaService
  ) {
this.mostrarPeliculas = true;
    this.titulo = 'Componente Peliculas';
this.peliculas = this._peliculaService.getPeliculas();
this.fecha = new Date(2021, 8, 12);

   }

  ngOnInit(): void {
    console.log(this.peliculas);
    console.log('evento OnInit');
    // prueba de servicio

console.log(this._peliculaService.holaMundo());
  }

  cambiarTitulo(){

    this.titulo = 'El titulo ha sido cambiado';
  }

  ocultarPeliculas(){
    this.mostrarPeliculas = false;
  }

  verPeliculas(){
    this.mostrarPeliculas = true;
  }

  mostrarFavoritas(event: any){

   this.favorita = event.pelicula;

  }

}
