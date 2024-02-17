import { Component, OnInit } from '@angular/core';
import { ProductStaticService } from 'src/app/services/product-static.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products: any ={}; 
  constructor(public _productServices:ProductService) {}
ngOnInit(): void {
  this._productServices.getAllProducts().subscribe({
    next:(data)=>{
      this.products=data
      console.log(`data is `,data)
    },
    error:(error)=>{console.log(`error is `,error)},
    complete:()=>{}
  });
}
  deleteProductHandler(id:number){
    // this.products=this._productServices.deleteProduct(id);
  }
  
}
