import { Component, OnInit, Injectable } from '@angular/core';
import { Article } from 'src/app/models/article';
// articleService import+provider+constructor como parametro
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { HttpClient } from '@angular/common/http';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html', // en este caso usamos la vista ya creada
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService, RestService],

})
export class ArticleEditComponent implements OnInit { public _http!: HttpClient;
  public article!: Article;
  public status!: string;
  private fileTmp: any;
  public restService!: RestService;
  public isEdit!: boolean;
  public page_title!: string;
  public url!: string;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _articleService: ArticleService,


  ) {

    this.article = new Article('', '', '', '', null);
    this.isEdit = true;
    this.page_title = 'Editar artículo';
    this.url = Global.url;
  }


  ngOnInit(): void {

this.getArticle();

  }

  getFile($event: any): void {
    
    // captura el archivo
    const [file] = $event.target.files;

    this.fileTmp = file;



  }
  



  onSubmit() {

    this._articleService.update(this.article._id, this.article).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = 'success';
          
          this.article = response.articleStored;
          this._articleService.subirImagen(this.fileTmp, this.article._id)
          .subscribe(
            response=>{
              
              console.log(response);

          }, 
          error=>{

            console.log(error);
          });
          this._router.navigate(['/blog/articulo', this.article._id]);
         

        } else {


          this.status = 'error';

        }



      },
      error => {

        console.log(error);
        this.status = 'error';

      }
    )
  }
//rellena el articulo actual a editar para que solo añadamos los cambios y se llama en el Oninit
  getArticle(){
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

}


