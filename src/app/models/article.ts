//crear modelo en base al que tenemos en el backend

export class Article {

    constructor(
        public _id: string,
        public title: string,
        public content: string,
        public image: string,
        public date: any,

    ) {

    }

}



/*title: String,
  content:String,
  date: {type: Date, default: Date.now},// por default fecha actual
  image:String*/