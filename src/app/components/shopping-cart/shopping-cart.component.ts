import { Component, OnInit } from '@angular/core';
import { ArticlesService } from "../../services/articles/articles.service";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  items!: Array<any>;
  total:number = 0;

  constructor(public articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.items = this.articlesService.serviceGetItemsCar();

    this.calculaTotal();


  }

  clickBuy(){
    Swal.fire(
      'OK!',
      '¡Aún estamos trabjando en este modulo, agradecemos tu interés en nuestros productos!',
      'success'
    );
  }

  delete(item: any) {
    if(confirm('¿Seguro de eliminar este registro?')) {
      this.articlesService.ServiceDeleteItemCar(item);
      this.calculaTotal();
      
    }
  }

  calculaTotal(){

    this.total = 0;

    for (let i = 0; i < this.items.length; i++) {

      this.total = this.total + this.items[i].price_now;

    }
  }

}
