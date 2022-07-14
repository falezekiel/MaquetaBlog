//para crear un servicio importamos el injectable y el modelo de ser necesario este ultimo
// el decorador y la clase donde iran los metodos

import { Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula";

@Injectable()
export class PeliculaService{

    public peliculas: any;

    constructor(){

        this.peliculas = [
            new Pelicula('Spiderman 4', 2019, 'https://www.cinemascomics.com/wp-content/uploads/2022/03/Spider-Man-No-Way-Home-traje-final.jpg' ),
            new Pelicula('Los Vengadores', 2018, 'https://cloudfront-eu-central-1.images.arcpublishing.com/diarioas/PJSRZ6XALJO7ZE2ZOZKOPH4Q5U.jpg'),
            new Pelicula('Batman vs Superman', 2020, 'https://es.web.img3.acsta.net/newsv7/21/09/13/21/22/4178692.jpg'), 
            new Pelicula('Spiderman 4', 2021, 'https://www.cinemascomics.com/wp-content/uploads/2022/03/Spider-Man-No-Way-Home-traje-final.jpg' ),
          
          ];


    }
    
holaMundo(){
    return 'Hola mundo desde un servicio de Angular!!!';
}

getPeliculas(){

return  this.peliculas;

}

}