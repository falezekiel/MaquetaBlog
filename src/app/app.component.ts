import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //etiqueta
  templateUrl: './app.component.html', // vista asociada al componente
  styleUrls: ['./app.component.css'] //estilos
})
export class AppComponent {
  public title = 'maquetangular';
  // 4- creamos la variable con el texto, la cual pasaremos al componente hijo
// public HomeText = 'Esto es un proyecto de Angular';// no sera usado

}
