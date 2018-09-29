import { Component, OnInit } from '@angular/core';
import {ProductCategory} from './productCategory.model';
import { Product } from './product.model';
import { Router } from '@angular/router';
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

  constructor(private productCategoryService: ProductCategoryService, private productService: ProductsService) { }

  ngOnInit() {
    this.productCategoryService.categorySelected
      .subscribe(
        (productCategory: ProductCategory)=>{
          this.selectedProductCategory=productCategory;
        }
      );
    this.productService.productSelected
      .subscribe((product: Product)=>{
        this.selectedProduct=product;
      });
  }



}
