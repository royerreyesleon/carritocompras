import { Component, OnInit } from '@angular/core';
// import { Post } from '../../models/Post';
import { PostService } from '../../services/post/post.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // @Input() items!: Post[];

  constructor(public itemService: PostService) { }

  ngOnInit(): void {
  }


  addPost(pName : any, pEmail: any, pPost: any){
    
    this.itemService.serviceAddItem({
      name        : pName.value,
      email       : pEmail.value,
      description : pPost.value
    });
    
    pName.value  = '';
    pEmail.value = '';
    pPost.value  = '';
    pName.focus();


    Swal.fire(
      'OK!',
      'En breve atenderemos sus inquietudes!',
      'success'
    );

    return false;
  }


}
