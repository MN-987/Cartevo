import { IProduct } from './../../models/iproduct';
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
        },
      });
    }
  }

  addProductHandler() {
    if (this.prdoIdParam != 0) {
      // If product ID is not zero, update the product
      const updatedProduct: IProduct = this.createProductObject();
      // this._productService.updateProduct(updatedProduct);
      this._productService.editProduct(this.prdoIdParam, updatedProduct).subscribe({
        next: (data) => {
          console.log('Product updated successfully');
          this.router.navigate(['/products']);
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

  private createProductObject(): IProduct {
    return {
      id: +this.prdoIdParam || Math.floor(Math.random() * 1000) + 1,
      name: this.productName,
      quantity: this.productQuantity,
      price: this.productPrice,
    };
  }
}
