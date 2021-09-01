import { Injectable } from '@angular/core';
import { Post } from '../../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // items!: Post[];
  items!: Array<any>;

  constructor() {
    this.items = [
      {
        name:"Royer Reyes León",
        email:"royerleon7@gmail.com",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate minus, consectetur beatae fugit odio iure repudiandae quia distinctio, id ducimus molestiae. Obcaecati, unde. Illo molestiae dolorum, saepe nisi enim iusto."
      },
      {
        name:"Test",
        email:"test@gmail.com",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate minus, consectetur beatae fugit odio iure repudiandae quia distinctio, id ducimus molestiae. Obcaecati, unde. Illo molestiae dolorum, saepe nisi enim iusto."
      }
    ]
  }

  serviceGetItems(){
    if(localStorage.getItem('posts') === null){
      return this.items;
    }else{

      this.items = JSON.parse(localStorage.getItem('posts')!);
      return this.items;
    }
  }

  serviceAddItem(item:Post){
    this.items.push(item);
    // return false;
    
    let posts : Post[] = [];
    
    if (localStorage.getItem('posts') === null) {
      posts = this.items;
      // posts.push(item);
      // CONVERTIR DE JSON A STRING.
      localStorage.setItem('posts', JSON.stringify(posts));
    }else{
      // CONVERTIR DE STRING A JSON.
      posts = JSON.parse(localStorage.getItem('posts')!);
      posts.push(item);
      localStorage.setItem('posts', JSON.stringify(posts));
    }
    
  }
  
  ServiceDeleteItem(item : Post){
    for (let i = 0; i < this.items.length; i++) {
      // const element = array[i];
      if (item == this.items[i]) {
        this.items.splice(i, 1);
        
        localStorage.setItem('posts', JSON.stringify(this.items));

      }
      
    }
  }


}
