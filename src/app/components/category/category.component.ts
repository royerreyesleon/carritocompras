import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../models/Category';
import { CategoryService } from '../../services/category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() items!: Category[];

  constructor(public itemService: CategoryService) { }

  ngOnInit(): void {

    this.items = this.itemService.serviceGetItems();
    
  }

}
