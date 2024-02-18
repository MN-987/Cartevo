import { Component , Input } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  constructor(public _productService: ProductService) { }
  @Input() productItem:any;

  getDefaultImageUrl(): string {
    return this.productItem.product.baseImageUrl;
  }

  getSecondaryImageUrl(): string {
    return this.productItem.product.secondaryImageUrl;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('productItem', this.productItem);
  }
}
