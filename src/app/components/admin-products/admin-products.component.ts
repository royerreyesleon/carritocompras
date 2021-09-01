import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  // imgBase64!: ArrayBuffer;
  imgBase64!: any;

  constructor() { }

  ngOnInit(): void {
  }

  addProduct(pTitle: any, pPriceBefore: any, pPriceNow: any, pDescription: any, pImg: any){
    console.log(pTitle.value);
    console.log(pPriceBefore.value);
    console.log(pPriceNow.value);
    console.log(pDescription.value);
    console.log(pImg);
    console.log(this.imgBase64);

    return false;
    
  }

  // handleUpload(event: { target: { files: any[]; }; }) {
  handleUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {

      this.imgBase64 = reader.result;

      console.log(this.imgBase64);
    };
}

}
