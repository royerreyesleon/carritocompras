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
          {descripction:"Nuevo"},
          {descripction:"50% Rebaja"},
        ],
        imgs : [
          {imagen:"imagen.png"}
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
          {descripction:"Nuevo"},
          {descripction:"50% Rebaja"},
        ],
        imgs : [
          {imagen:"imagen.png"}
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
          {descripction:"Nuevo"},
                  {descripction:"50% Rebaja"},
                 ],
        imgs : [
                    {imagen:"imagen.png"}
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
                  {descripction:"Nuevo"},
                  {descripction:"50% Rebaja"},
                 ],
        imgs : [
                    {imagen:"imagen.png"}
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


  /*
  addTask(task:Task){
    this.tasks.push(task);
    // return false;
    
    let tasks : Task[] = [];

    if (localStorage.getItem('tasks') === null) {
      tasks.push(task);
      // CONVERT ARRAY TO STRING WITH JSON.stringify 
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }else{
      tasks = JSON.parse(localStorage.getItem('tasks'));
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

  }

  deleteTask(task : Task){
    for (let i = 0; i < this.tasks.length; i++) {
      // const element = array[i];
      if (task == this.tasks[i]) {
        this.tasks.splice(i, 1);
        
        localStorage.setItem('tasks', JSON.stringify(this.tasks));

      }
      
    }
  }
  */
}
