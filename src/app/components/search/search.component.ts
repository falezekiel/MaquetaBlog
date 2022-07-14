import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { ArticleComponent } from '../article/article.component';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
})
export class SearchComponent implements OnInit {

  public articles: Article[] = [];
  public search!: string;

  constructor(
private _route: ActivatedRoute,
private _router: Router,
private _articleServise: ArticleService

  ) { }

  ngOnInit(): void {

this._route.params.subscribe(params =>{
  var search = params ['search'];

  this.search = search;

  this._articleServise.search(search).subscribe(response =>{

    if(response.articles){
      this.articles = response.articles;

      console.log(this.articles);
    } else {
      this.articles = [];
//se le da un valor de array vacio para que no quede el loop de cargando
    }

  },
  error =>{

console.log(error);
this.articles = [];
//se le da un valor de array vacio para que no quede el loop de cargando
  }
  )
})

  }

}
