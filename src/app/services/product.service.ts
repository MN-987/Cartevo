import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
baseURl:string='http://localhost:3001/products'
  constructor( public _httpClient:HttpClient ) { }
  getAllProducts(){
    return this._httpClient.get(this.baseURl)
  }
  getProductById(id:any){
    return this._httpClient.get(`${this.baseURl}/${id}`)
  }
  addProduct(product:any){
    return this._httpClient.post(this.baseURl, product)
  }
  editProduct(id:any, product:any){
    return this._httpClient.put(`${this.baseURl}/${id}`,product)  
  }
  deleteProduct(id:any){
    return this._httpClient.delete(`${this.baseURl}/${id}`)
  }
}
