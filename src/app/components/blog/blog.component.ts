import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {

  public articles: Article[] = [];
//creamos la url para pasarle a la vista
  public url!: string;

  constructor(
    private _articleService: ArticleService
  ) {
//damos valor al url
        this.url = Global.url;

   }

  ngOnInit(): void {

    //prueba de peticion, el subscribe es una prop del observable
    //mostrar articulos
this._articleService.getArticles().subscribe(response => {
//response trae una propiedad success y una article
  if(response){
    this.articles = response.articles;
  } else {

  }
  
},   error =>{

  console.log(error);

}

  
  );

}

}
