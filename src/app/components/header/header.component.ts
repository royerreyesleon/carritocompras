import { Component, OnInit } from '@angular/core';

declare var $:any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickCategories(){

    if(window.matchMedia("(max-width:767px)").matches){
      $("#btnCategorias").after($("#categorias").slideToggle("fast"))
    }else{
      $("#cabezote").after($("#categorias").slideToggle("fast"))
    }
    
  }

}
