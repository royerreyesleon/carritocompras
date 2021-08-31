import { Injectable } from '@angular/core';
import { Post } from '../../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // items!: Post[];
  items!: Array<any>;

  constructor() { }

  serviceGetItems(){
    if(localStorage.getItem('posts') === null){
      return this.items;
    }else{

      this.items = JSON.parse(localStorage.getItem('posts')!);
      return this.items;
    }
  }

  serviceAddItem(item:Post){
    // this.items.push(item);
    // return false;
    
    let posts : Post[] = [];
    
    if (localStorage.getItem('posts') === null) {
      posts.push(item);
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
