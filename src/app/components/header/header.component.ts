import { Component, OnInit } from '@angular/core';
import { ArticlesService } from "../../services/articles/articles.service";

declare var $:any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // articles!:any;
  articles!: Array<any>;

  constructor(public articlesService : ArticlesService) {

  }

  ngOnInit(): void {
    this.articles    = this.articlesService.serviceGetItemsCar();
  }

  clickCategories(){

    if(window.matchMedia("(max-width:767px)").matches){
      $("#btnCategorias").after($("#categorias").slideToggle("fast"))
    }else{
      $("#cabezote").after($("#categorias").slideToggle("fast"))
    }
    
  }

}
