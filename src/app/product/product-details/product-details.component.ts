import {Component, Input, OnInit} from '@angular/core';
import {ProductCategory} from '../productCategory.model';
import { Product } from '../product.model';
import { ProductCategoryService } from '../product-category.service';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productCategory:ProductCategory;
 product: Product;

  constructor(private productCategoryService: ProductCategoryService,private productService: ProductsService,private route: ActivatedRoute,private router: Router) {

  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          let numberId = +params['id'];
          let productId = +params['productId'];
          console.log("PARAMS"+params);
          console.log("FROM ProductDetailsComponent:  numberId: "+numberId+" productId: "+productId);
          // this.productCategory = this.productCategoryService.getProductCategoryById(numberId);
          this.product=this.productService.getProductById(productId);
          console.log("FROM ProductDetailsComponent:  numberId: "+numberId+" productId: "+productId+" "+this.product.name);
        }
      );
  }

}
