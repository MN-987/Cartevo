import { IProduct } from './../../models/iproduct';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductStaticService } from 'src/app/services/product-static.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css'],
})
export class ProductsFormComponent implements OnInit {
  constructor(
    public _productService: ProductStaticService,
    public _activatedRoute: ActivatedRoute
  ) {}

  productPrice: number = 0;
  productName: string = '';
  productQuantity: number = 0;
  prdoIdParam: number = 0;

  ngOnInit(): void {
    this.prdoIdParam = +this._activatedRoute.snapshot.params['id'];

    if (this.prdoIdParam !== 0) {
      const product = this._productService.getProductById(this.prdoIdParam);
      if (product) {
        this.productPrice = product.price;
        this.productName = product.name;
        this.productQuantity = product.quantity;
      } else {
        alert('Product not found');
      }
    }
  }

  addProductHandler() {
    if (this.prdoIdParam !== 0) {
      // If product ID is not zero, update the product
      const updatedProduct: IProduct = this.createProductObject();
      this._productService.updateProduct(updatedProduct);
    } else {
      // If product ID is zero, add a new product
      const newProduct: IProduct = this.createProductObject();
      this._productService.addProduct(newProduct);
    }
  }

  private createProductObject(): IProduct {
    return {
      id: this.prdoIdParam || this._productService.getAllProducts().length + 1,
      name: this.productName,
      quantity: this.productQuantity,
      price: this.productPrice,
    };
  }
}
