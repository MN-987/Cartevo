import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductStaticService } from 'src/app/services/product-static.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  productId:number=0;
  product:any;
  constructor(public _activatedRoute:ActivatedRoute , public _productService:ProductService , public router:Router) {

   }
   ngOnInit(): void {
   this.productId= this._activatedRoute.snapshot.params['id'];
  //  this.product=this._productService.getProductById(+this.productId).subscribe({
  //   next(value) {
  //     console.log(value)
  //   }
  //  });
   }
  backToProduct(){
    this.router.navigate(['/products']);
  }
}
