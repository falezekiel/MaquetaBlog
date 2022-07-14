import { Component, Inject, Injectable, OnInit } from '@angular/core';
// para pasar parametros por URL primeri importar lo siguiente, y luego cargarlos en el constructor
import { Router, ActivatedRoute, Params, Route } from '@angular/router';

@Component({
  selector: 'app-paginar',
  templateUrl: './paginar.component.html',
  styleUrls: ['./paginar.component.css']
})
export class PaginarComponent implements OnInit {

  public nombre!: string;
  public apellido!: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
    
  ) { 
   
  }

  ngOnInit(): void {

this._route.params.subscribe((params: Params)=>{

  this.nombre = params['nombre'],

  this._route.params.subscribe((params: Params)=>{

    this.apellido = params['apellido']

  })
  

});

  }

  //redirecciones, este metodo se llama desde el html del componente con un boton

  redireccion(){

    this._router.navigate(['/pagina-de-pruebas', 'Eze', 'Decan']); // va la pagina y despues de la coma los parametros

  }

}
