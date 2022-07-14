//hacer importaciones

import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import { Article} from "../models/article";
import { Global } from "./global";

//cargar en app.module.ts importar el HttpClientModule y ponerlo en los imports de ese archivo

@Injectable()

export class ArticleService{

    public url: any;

constructor(

    private _http: HttpClient

){

this.url = Global.url;

}

pruebas(){

    return 'soy el servicio de articulos'
}
//metodo para llamar a los articulos, hay que definir el tipo como en este caso observable
getArticles(last:any = null):Observable<any>{
    var articles = 'articles';

    if(last != null){

        var articles = 'articles/true';

    } 
    
return this._http.get(this.url+articles);
}
//para sacar los ultimos articulos se puede crear un metodo nuevo o pasarle por parametro a getArticles true

// peticion para extraer un articulo

getArticle(articleId: string):Observable<any>{

    return this._http.get(this.url+'article/'+articleId)


}

//buscador

search(searchString: string):Observable<any>{

    return this._http.get(this.url+'search/'+searchString);
}

// guardar un articulo en backend

create(article: Article):Observable<any>{

   // let params = JSON.stringify(article); // convierte el articulo en un json
 //  let headers = new HttpHeaders().set('Content-Type', 'aplications/json'); // configura cabeceras

    return this._http.post(this.url+'save', article); // le paso los parametros a la ruta para que lo guarde
           
    
}

//para subir imagenes usamos libreria angular-file-uploader

subirImagen(miParametroDeImagen: any, id:string){
const formData = new FormData;
formData.append('file0',miParametroDeImagen);
    return this._http.post(this.url+'upload-image/'+id, formData);

}



update(id: any, article: any):Observable<any>{


    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.put(this.url+'article/'+id, article, {headers:headers});

}

delete(id: any):Observable<any>{

let headers = new HttpHeaders().set('Content-Type', 'application/json');

return this._http.delete(this.url+'article/'+id, {headers:headers});

}

}

function get(_arg0: string) {
    throw new Error("Function not implemented.");
}
