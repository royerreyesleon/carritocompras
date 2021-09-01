import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  // items : Social[];
  items: Object[];
  
  constructor() {
    this.items = [
      {
        id           : "1",
        title        : "CREA APLICACIONES CON PHP",
        slug         : "CREA-APLICACIONES-CON-PHP",
        price_before : 100,
        price_now    : 50,
        description  : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate minus, consectetur beatae fugit odio iure repudiandae quia distinctio, id ducimus molestiae. Obcaecati, unde. Illo molestiae dolorum, saepe nisi enim iusto.",
        labels : [
          {description:"Nuevo"},
          {description:"50% Rebaja"},
        ],
        imgs : [
          {imagen:"./assets/template/1/curso01.jpg"}
        ]
      },
      {
        id           : "2",
        title        : "CURSO DE JQUERY",
        slug         : "CURSO-DE-JQUERY",
        price_before : 200,
        price_now    : 100,
        description  : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate minus, consectetur beatae fugit odio iure repudiandae quia distinctio, id ducimus molestiae. Obcaecati, unde. Illo molestiae dolorum, saepe nisi enim iusto.",
        labels : [
          {description:"Nuevo"},
          {description:"50% Rebaja"},
        ],
        imgs : [
          {imagen:"./assets/template/1/curso03.jpg"}
        ]
      },
      {
        id           : "3",
        title        : "CURSO DE CANVAS Y JAVASCRIPT",
        slug         : "CURSO-DE-CANVAS-Y-JAVASCRIPT",
        price_before : 300,
        price_now    : 150,
        description  : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate minus, consectetur beatae fugit odio iure repudiandae quia distinctio, id ducimus molestiae. Obcaecati, unde. Illo molestiae dolorum, saepe nisi enim iusto.",
        labels : [
                  {description:"Nuevo"},
                  {description:"50% Rebaja"},
                 ],
        imgs : [
                    {imagen:"./assets/template/1/curso04.jpg"}
                  ]
      },
      {
        id           : "4",
        title        : "CREA APLICACIONES CON JS",
        slug         : "CREA-APLICACIONES-CON-JS",
        price_before : 400,
        price_now    : 200,
        description  : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate minus, consectetur beatae fugit odio iure repudiandae quia distinctio, id ducimus molestiae. Obcaecati, unde. Illo molestiae dolorum, saepe nisi enim iusto.",
        labels : [
                  {description:"Nuevo"},
                  {description:"50% Rebaja"},
                 ],
        imgs : [
                    {imagen:"./assets/template/1/curso01.jpg"}
                  ]
      },
    ]
  }

  serviceGetItems(){
    if(localStorage.getItem('articles') === null){
      return this.items;
    }else{

      this.items = JSON.parse(localStorage.getItem('articles')!);
      return this.items;
    }
  }


  serviceAddItem(item:Object){
    this.items.push(item);
    // return false;
    
    let articles : Object[] = [];
    
    if (localStorage.getItem('articles') === null) {
      
      articles = this.items
      // articles.push(this.items);

      // articles.push(item);
      // CONVERTIR DE JSON A STRING.
      localStorage.setItem('articles', JSON.stringify(articles));
    }else{
      // CONVERTIR DE STRING A JSON.
      articles = JSON.parse(localStorage.getItem('articles')!);
      articles.push(item);
      localStorage.setItem('articles', JSON.stringify(articles));
    }
    
  }
  
  ServiceDeleteItem(item : Object){
    for (let i = 0; i < this.items.length; i++) {
      // const element = array[i];
      if (item == this.items[i]) {
        this.items.splice(i, 1);
        
          localStorage.setItem('articles', JSON.stringify(this.items));

      }
      
    }
  }
}
