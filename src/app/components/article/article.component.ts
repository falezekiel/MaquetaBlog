import { Component, Injectable, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';
import { Article } from 'src/app/models/article';
import { Router, ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {



 public article!: Article;
 public url!: string;

  constructor(
   private _articleService: ArticleService,
   private _route: ActivatedRoute,
   private _router: Router
   
  ) {
    this.url = Global.url
   }

  ngOnInit(): void {

    this._route.params.subscribe(params=> {
      let id = params ['id'];

this._articleService.getArticle(id).subscribe(
  response=>{
    if(response.article){
      this.article = response.article;
    } else {
      this._router.navigate(['/home']);
    }

  },
 error=>{
   console.log(error);
   this._router.navigate(['/home']);
 }
 
);

    });

 

}

delete(id: any){
  this._articleService.delete(id).subscribe(
response =>{

  this._router.navigate(['/home']);

}, error =>{

console.log(error);
this._router.navigate(['/home']);

}


  )
}
}