import { Component, Input, OnInit } from '@angular/core';
import { Subcategory } from '../../models/Subcategory';


@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

  @Input() sub!: Subcategory;

  constructor() { }

  ngOnInit(): void {
  }

}
