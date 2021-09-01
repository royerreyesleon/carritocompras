import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent }    from './components/articles/articles.component';
import { ArticleComponent }     from './components/article/article.component';
import { LoginComponent }       from './components/login/login.component';
import { AdminComponent }       from './components/admin/admin.component';
import {APP_BASE_HREF}          from '@angular/common';
import { AuthGuard }            from "./auth.guard";

import { TokenInterceptorService } from "./services/token-interceptor/token-interceptor.service";
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminCategoriesComponent } from './components/admin-categories/admin-categories.component';
import { AdminConcernsComponent } from './components/admin-concerns/admin-concerns.component';

const routes: Routes = [
  // { path: '',              component: AboutComponent,  pathMatch: 'full'}
  { path: 'articulos',        component: ArticlesComponent,},
  { path: 'articulo/:id',     component: ArticleComponent,},
  { path: 'ingresar',         component: LoginComponent,},
  { path: 'admin',            component: AdminComponent,           canActivate:[AuthGuard]},
  { path: 'admin/productos',  component: AdminProductsComponent,   canActivate:[AuthGuard]},
  { path: 'admin/categorias', component: AdminCategoriesComponent, canActivate:[AuthGuard]},
  { path: 'admin/inquietudes',component: AdminConcernsComponent,   canActivate:[AuthGuard]},
  { path: '**',               component: ArticlesComponent,},
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, relativeLinkResolution:'legacy'})],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppRoutingModule { }
