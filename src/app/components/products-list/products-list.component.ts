import { productList } from './../../services/productsList';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit{

  productList: any = [];
  constructor(public _productService: ProductService) {}

  ngOnInit(): void {
    
    this._productService.getAllProducts().subscribe({
      next: (data) => {
        this.productList = data;
        console.log('Products fetched successfully', this.productList);
      },
      error: (err) => {
        console.log('Error fetching products', err);
      },
    });
  }
 
}
