import { Component, OnInit } from '@angular/core';
import {ProductCategory} from './productCategory.model';
import { Product } from './product.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductCategoryService } from './product-category.service';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  selectedProductCategory:ProductCategory;
  selectedProduct: Product;
  productCategoryId: number;
  productCategoriesList: ProductCategory[];

  constructor(private productCategoryService: ProductCategoryService, private productService: ProductsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.productCategoriesList=this.productCategoryService.getProductCategoriesList();
    // this.productCategoryService.categorySelected
    //   .subscribe(
    //     (productCategory: ProductCategory)=>{
    //       this.selectedProductCategory=productCategory;
    //     }
    //   );
    // this.productService.productSelected
    //   .subscribe((product: Product)=>{
    //     this.selectedProduct=product;
    //   });this.productCategoryService.categorySelected
    //   .subscribe(
    //     (productCategory: ProductCategory)=>{
    //       this.selectedProductCategory=productCategory;
    //     }
    //   );
    // this.productService.productSelected
    //   .subscribe((product: Product)=>{
    //     this.selectedProduct=product;
    //   });
    this.route.params
      .subscribe(
        (params: Params) => {
          let idNumber = +params['id'];
          console.log("ddddddddddddddd "+idNumber);
          this.selectedProductCategory = this.productCategoryService.getProductCategoryById(idNumber);
          console.log("selectedProductCategory: "+this.selectedProductCategory.productCategoryId+" "+this.selectedProductCategory.name);
        }
      );
  }


}
