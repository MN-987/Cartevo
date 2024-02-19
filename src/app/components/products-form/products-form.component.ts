import { productList } from './../../services/productsList';
import { IProduct } from './../../models/iproduct';
import { FashionProduct } from 'src/app/models/fashionProduct';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductStaticService } from 'src/app/services/product-static.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css'],
})
export class ProductsFormComponent implements OnInit {
  constructor(
    public _productService: ProductService,
    public _activatedRoute: ActivatedRoute,
    public router: Router
  ) {}
  productPrice: number = 0;
  productName: string = '';
  productQuantity: number = 0;
  prdoIdParam: any = '';
  productStars: number = 0;
  productImageUrl: string = '';
  productDecription: string = '';
  
  ngOnInit(): void {
    this._activatedRoute.params.subscribe({
      next: (params) => {
        console.log('params', params['id']);
        this.prdoIdParam = params['id'];
      },
    });

    if (this.prdoIdParam !== '0') {
      this._productService.getProductById(this.prdoIdParam).subscribe({
        next: (product: any) => {
          this.productName = product.name;
          this.productQuantity = product.quantity;
          this.productPrice = product.price;
          this.productStars = product.rating;
          this.productImageUrl = product.baseImageUrl;
          this.productDecription = product.description;
        },
      });
    }
  }

  addProductHandler() {
    
    if (this.prdoIdParam != 0) {
      // If product ID is not zero, update the product
      const updatedProduct: FashionProduct = this.createProductObject();
      // this._productService.updateProduct(updatedProduct);
      this._productService.editProduct(this.prdoIdParam, updatedProduct).subscribe({
        next: (data) => {
          console.log('Product updated successfully');
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.log('Error updating product', err);
        },
      });
    } else {
      // If product ID is zero, add a new product
      console.log('Product enterd successfully');
      this._productService.addProduct(this.createProductObject()).subscribe({
        next: (data) => {
          console.log('Product added successfully');
          this.router.navigate(['/products']);
        },
        error: (err) => {
          console.log('Error adding product', err);
        },
      });
    }
  }

   randomId=Math.floor(Math.random() * 1000) + 1;
  private createProductObject(): FashionProduct {
    console.log(`from create Prodduct object `,  typeof(this.prdoIdParam))
    return {
      id: +this.prdoIdParam || this.randomId.toString(),
      name: this.productName,
      quantity: this.productQuantity,
      price: this.productPrice,
      baseImageUrl: this.productImageUrl,
      rating: this.productStars.toString(),
      description: this.productDecription,
    };
  }
}
