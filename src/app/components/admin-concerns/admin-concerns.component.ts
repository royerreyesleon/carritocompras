import { Component, OnInit } from '@angular/core';
import { PostService } from "../../services/post/post.service";
import { Post } from "../../models/Post";

@Component({
  selector: 'app-admin-concerns',
  templateUrl: './admin-concerns.component.html',
  styleUrls: ['./admin-concerns.component.css']
})
export class AdminConcernsComponent implements OnInit {

  items!: Post[];

  constructor(public postService:PostService) { }

  ngOnInit(): void {

    this.items = this.postService.serviceGetItems();
    
  }

  delete(item: Post) {
    if(confirm('¿Seguro de eliminar este registro?')) {
      this.postService.ServiceDeleteItem(item);
    }
  }

}
