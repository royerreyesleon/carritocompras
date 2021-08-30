import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent }      from './components/footer/footer.component';
import { HeaderComponent }      from './components/header/header.component';
// import { HomeComponent }        from './components/home/home.component';
import { ArticlesComponent }        from './components/articles/articles.component';
import { ArticleComponent }        from './components/article/article.component';
import { NavComponent }         from './components/nav/nav.component';
import { SlideshowComponent }   from './components/slideshow/slideshow.component';
import {APP_BASE_HREF}          from '@angular/common';

const routes: Routes = [
  // { path: '',         component: AboutComponent,  pathMatch: 'full'}
  // { path: '**',       component: AboutComponent,},
  // { path: '/',        component: AboutComponent,},
  // { path: 'inicio',      component: HomeComponent,},
  { path: 'articulos',      component: ArticlesComponent,},
  { path: 'articulo/:id',      component: ArticleComponent,},
  // { path: 'acerca-de',   component: FooterComponent,},
  // { path: 'experiencia', component: HeaderComponent,},
  // { path: 'habilidades', component: NavComponent,},
  // { path: 'portafolio',  component: SlideshowComponent,},
  // { path: '**',          component: HomeComponent,},
  { path: '**',          component: ArticlesComponent,},
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, relativeLinkResolution:'legacy'})],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppRoutingModule { }
