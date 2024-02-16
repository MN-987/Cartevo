import { Component, OnInit } from '@angular/core';
import { ProductStaticService } from 'src/app/services/product-static.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
products:any[]=[];
  constructor(public _productServices:ProductStaticService) {}
ngOnInit(): void {
   this.products= this._productServices.getAllProducts();
}
  deleteProductHandler(id:number){
    this.products=this._productServices.deleteProduct(id);
  }
  
}
