import { Component, OnInit } from '@angular/core';

//cargar el formulario en app.module.ts , importar y cargar en imports

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
// se crea un objeto en este caso user, que es el que va a modificar el formulario
  public user: any;
  public campo: string | undefined;
  public campo2: string | undefined;

  constructor() {

    this.user = {
        nombre: '',
        apellidos: '',
        bio: '',
        genero: '',

    }
   }

  ngOnInit(): void {
  }
//vincular este metodo (cualquier nombre puede tener) con el ngsubmit en la apertura de etiqueta form
//ponerle nombre al form en la misma etiqueta de apertura ej: #userForm='ngForm'
// colocar nombre a los campos del form de angular ej: #nombre='ngModel' [(ngModel)]='user.title'
//en caso del title no esta en el objeto la propiedad entonces la crea, pero en relaidad va user.nombre
// en angular la modificacion es bidireccional, se modifica tanto en la vista como en los datos
// en los radius va directamente por ej: [(ngModel)]="user.genero", no el nombre con la almohadilla
  onSubmit(){
      alert('Formulario enviado!!');
      console.log(this.user);

  }

  //validar formulario:
  // en este caso se pasa por cada campo un required, en los radius se pone en uno solo
  // luego validar con angular: un small debajo de cada campo
  // <small *ngIf="!nombreDelCampo.valid && nombreDelCampo.touched">
  // El nombre no es válido </small>
  //con el pattern (luego del required) se pueden establecer  los caracteres aceptados ej:
  // pattern='[a-zA-Z]+' acepta letras may y min indefinidas
  // ahora si en los radius poner nombre con almohadilla #genero='ngModel' en cada uno

  //hacer que no deje enviar los datos cuando el form no es valido
  //en el boton enviar colocar [disabled]="userForm.invalid"

  //PRUEBA DE EVENTOS

  hasDadoClick(){

    alert('Has dado click!');
    

  }

  // evento blur (cuando salgo de un imput)
//<button (click)="hasDadoClick()" >Dale click</button>
 // <input type="text" [(ngModel)]="campo" (blur)="hasSalido">
//{{campo}}


  hasSalido(){
alert('Has salido');

  }

  //keyup (cuando toco una tecla y la levanto, se puede configurar como por ej con enter keyup.enter)
 //<input type="text" [(ngModel)]="campo" (keyup.enter)="pruebaKeyUp()">
//{{campo}}

pruebaKeyUp(){

alert('keyup funciona correctamente')

}

}
