import { Component, Input, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles/articles.service';

declare var $:any;

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  // @Input() items!: Category[];
  // @Input() items!: Object[];
  @Input() items!: Array<any>;


  constructor(public itemService: ArticlesService) { }

  ngOnInit(): void {

    this.items = this.itemService.serviceGetItems();

    $("html, body").animate({ scrollTop: "0" });

  }

}
