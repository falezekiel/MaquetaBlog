import { Component, OnInit, Injectable } from '@angular/core';
import { Article } from 'src/app/models/article';
// articleService import+provider+constructor como parametro
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService, RestService],

})
export class ArticleNewComponent implements OnInit {


  public _http!: HttpClient;
  public article!: Article;
  public status!: string;
  private fileTmp: any;
  public restService!: RestService;
  public page_title!: string;
  public isEdit!: boolean;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _articleService: ArticleService,
   


  ) {

    this.article = new Article('', '', '', '', null);
    this.page_title = 'Crear artículo';
    this.isEdit = false;   
  }

  ngOnInit(): void {

  }

  getFile($event: any): void {
    
    // captura el archivo
    const [file] = $event.target.files;

    this.fileTmp = file;



  }
  



  onSubmit() {

    this._articleService.create(this.article).subscribe(
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
            debugger
            console.log(error);
          });
          this._router.navigate(['/blog']);
         

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


}
