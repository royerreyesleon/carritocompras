import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';

import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';
import { NavComponent }         from './components/nav/nav.component';
import { FooterComponent }      from './components/footer/footer.component';
import { HomeComponent }        from './components/home/home.component';
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

import { AuthGuard } from "./auth.guard";
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    SlideshowComponent,
    ArticlesComponent,
    ArticleComponent,
    BreadcrumbComponent,
    SocialItemComponent,
    CategoryComponent,
    SubcategoryComponent,
    ArticleItemComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
