import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';

import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';
import { NavComponent }         from './components/nav/nav.component';
import { FooterComponent }      from './components/footer/footer.component';
import { HeaderComponent }      from './components/header/header.component';
import { SlideshowComponent }   from './components/slideshow/slideshow.component';
import { ArticlesComponent }    from './components/articles/articles.component';
import { ArticleComponent }     from './components/article/article.component';
import { BreadcrumbComponent }  from './components/breadcrumb/breadcrumb.component';
import { SocialItemComponent }  from './components/social-item/social-item.component';
import { CategoryComponent }    from './components/category/category.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { LoginComponent }       from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AuthGuard } from "./auth.guard";
import { TokenInterceptorService } from "./services/token-interceptor/token-interceptor.service";
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminCategoriesComponent } from './components/admin-categories/admin-categories.component';
import { AdminConcernsComponent } from './components/admin-concerns/admin-concerns.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    SlideshowComponent,
    ArticlesComponent,
    ArticleComponent,
    BreadcrumbComponent,
    SocialItemComponent,
    CategoryComponent,
    SubcategoryComponent,
    AdminComponent,
    ArticleItemComponent,
    LoginComponent,
    AdminProductsComponent,
    AdminCategoriesComponent,
    AdminConcernsComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
