import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],
 
})
export class PeliculaComponent implements OnInit {

  @Input() pelicula: Pelicula | undefined;
  @Input() indice: number | undefined;
  @Output() MarcarFavorita = new EventEmitter();

  constructor(

    

  ) { }

  ngOnInit(): void {


  }

seleccionar(event: any, pelicula: Pelicula){
 this.MarcarFavorita.emit({
   pelicula: pelicula

   

 });

 

}
  
}
