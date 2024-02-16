import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { productList } from './productsList';

@Injectable({
  providedIn: 'root',
})
export class ProductStaticService {
  products: IProduct[] = [];
  constructor() {
   this.products = productList;
  }
  getAllProducts(): IProduct[] {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find((p) => p.id === id);
  }

  deleteProduct(id: number) {
    productList.splice(productList.findIndex((p) => p.id === id), 1);
    return this.products.filter((p) => p.id !== id);
  }
  addProduct(product: IProduct) {
    this.products.push(product);
  }
  updateProduct(product: IProduct) {
    const index = this.products.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      this.products[index] = product;
    } else {
      throw new Error('Product not found'); // You can handle this error in a different way based on your application's requirements
    }
  }

}
