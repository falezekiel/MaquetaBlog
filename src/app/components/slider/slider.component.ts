import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',

})
export class SliderComponent implements OnInit {

  // 2-llamo a la propiedad creada en appcomponent(elemento padre)
  @Input() nombre: string | undefined;
  @Input() size:string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
