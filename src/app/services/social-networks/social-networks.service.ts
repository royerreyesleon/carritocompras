import { Injectable } from '@angular/core';
import { Social } from '../../models/Social';

@Injectable({
  providedIn: 'root'
})
export class SocialNetworksService {

  // items: Object[];
  items : Social[];
  
  constructor() {
    this.items = [
      {icon: "fa fa-facebook",  url: "https://www.facebook.com/Faastxapp"},
      {icon: "fa fa-instagram", url: "https://www.instagram.com/_faastx/"},
      {icon: "fa fa-envelope",  url: "mailto:hola@faastx.com"},
      {icon: "fa fa-apple",     url: "https://apps.apple.com/us/app/faastx-mercado/id1479666755"},
      {icon: "fa fa-android",   url: "https://play.google.com/store/apps/details?id=com.faastx.user&hl=es_MX&gl=US"}
    ]
  }

  serviceGetItems(){
    if(localStorage.getItem('social') === null){
      return this.items;
    }else{

      this.items = JSON.parse(localStorage.getItem('social')!);
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
