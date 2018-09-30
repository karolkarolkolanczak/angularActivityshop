import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../product.model';
import { ProductsService } from '../../products.service';
import { ProductCategoryService } from '../../product-category.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductCategory } from '../../productCategory.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  productCategory: ProductCategory;
productId;
  constructor(private productCategoryService: ProductCategoryService,private productService: ProductsService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {


    this.route.params
      .subscribe(
        (params: Params) => {
          let numberId = +params['id'];
          this.productId=+params['productId'];
          console.log(" "+numberId);
          this.productCategory = this.productCategoryService.getProductCategoryById(numberId);
          this.product=this.productService.getProductById(this.productId);
        }
      );
  }

  // productSelected(){
  //   this.productService.productSelected.emit(this.product);
  // }

}
