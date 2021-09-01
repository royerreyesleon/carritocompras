import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { ArticlesService } from "../../services/articles/articles.service";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  // imgBase64!: ArrayBuffer;
  // items!: Object[];
  items!: Array<any>;
  imgBase64!: any;

  constructor(private articlesService:ArticlesService) { }

  ngOnInit(): void {
    this.items = this.articlesService.serviceGetItems();
    
  }

  addProduct(pTitle: any, pPriceBefore: any, pPriceNow: any, pDescription: any, pImg: any){

    this.articlesService.serviceAddItem({
      id          : Date.now(),
      title       : pTitle.value,
      slug        : pTitle.value,
      price_before: pPriceBefore.value,
      price_now   : pPriceNow.value,
      description : pDescription.value,
      labels : [
                  {descripction:"Nuevo"},
                  {descripction:"50% Rebaja"},
               ],
      imgs : [
                {imagen:this.imgBase64}
             ]
    });
    
    pTitle.value        = '';
    pPriceBefore.value  = '';
    pPriceNow.value     = '';
    pDescription.value  = '';
    pImg.value          = '';
    this.imgBase64      = '';
    pTitle.focus();


    Swal.fire(
      'OK!',
      '',
      'success'
    );

    return false;
    
  }

  // handleUpload(event: { target: { files: any[]; }; }) {
  handleUpload(event: any) {
    const file   = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {

      this.imgBase64 = reader.result;

      console.log(this.imgBase64);
    };
  }

  delete(item: any) {
    if(confirm('¿Seguro de eliminar este registro?')) {
      this.articlesService.ServiceDeleteItem(item);
    }
  }

}
