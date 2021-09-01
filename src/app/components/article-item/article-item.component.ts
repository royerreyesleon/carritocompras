import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../models/Article';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {

  @Input() item!: Article;

  constructor() { }

  ngOnInit(): void {

  }

}
