import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductStaticService } from 'src/app/services/product-static.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  productId:number=0;
  product:any;
  constructor(public _activatedRoute:ActivatedRoute , public _productService:ProductStaticService  , public router:Router) {

   }
   ngOnInit(): void {
   this.productId= this._activatedRoute.snapshot.params['id'];
   this.product=this._productService.getProductById(+this.productId);

   }
  backToProduct(){
    this.router.navigate(['/products']);
  }
}
