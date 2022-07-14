// Importar los modulos del router de Angular

import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//importar componenetes a los cuales les quiero hacer una pagina exclusiva

import { HomeComponent } from "./components/home/home.component";
import { BlogComponent } from "./components/blog/blog.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { PeliculasComponent } from "./components/peliculas/peliculas.component";
import { PaginarComponent } from "./components/paginar/paginar.component";
import { ErrorComponent } from "./components/error/error.component";
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from "./components/article-new/article-new.component";
import { ArticleEditComponent } from './components/article-edit/article-edit.component';


// array de rutas

const appRoutes: Routes = [
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'peliculas', component: PeliculasComponent},
    {path: 'pagina-de-pruebas', component: PaginarComponent}, // para que el parametro sea opcional hay que crear una ruta paralela sin parametro
    {path: 'pagina-de-pruebas/:nombre', component: PaginarComponent}, //un parametro
    {path: 'pagina-de-pruebas/:nombre/:apellido', component: PaginarComponent}, // doble parametro
    {path: 'buscar/:search', component: SearchComponent}, //buscador
    {path: 'blog/articulo/:id',component: ArticleComponent}, //pagina de detalle de articulo
    {path: 'blog/crear', component: ArticleNewComponent},// crea articulo
    {path: 'blog/editar/:id', component: ArticleEditComponent}, // edita articulo 
    {path: '**', component: ErrorComponent} // esta si o si debe ser la ultima pagina
    
    
];

// Exportar el modulo de rutas

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);


//cargar el fichero en app.modules para que funcione

//cargar router outlet en app.component.html

// en index html cargar en el head <base href="/"> si muestra la pantalla en blanco