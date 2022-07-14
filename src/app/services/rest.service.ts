import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Global } from "./global";
import { Article } from "../models/article";

@Injectable({
    providedIn: 'root',
})

export class RestService {
    public article!: Article;

    public url: any;

    constructor(private http:HttpClient){

        this.url = Global.url


    }
sendPost(){
    
  
    
}

}