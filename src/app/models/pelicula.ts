export class Pelicula {

  /* ESTA ES UNA DE LAS MANERAS DE DECLARAR LA CLASE DEL MODELO
   public title: string;
    public image: string;
    public year: number;

    constructor(title: string, year: number, image: string){

        this.title = title;
        this.year = year;
        this.image = image;

    } */

    // Y ESTA ES LA MAS CORTA

    constructor(
        public title: string,
        public year: number,
        public image: string
    ){



    }


}