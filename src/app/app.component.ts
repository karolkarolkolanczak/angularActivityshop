import { Component, OnInit } from '@angular/core';
import { ProductsService } from './product/products.service';
import { ProductCategoryService } from './product/product-category.service';
import { ProductCategory } from './product/productCategory.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProductsService,ProductCategoryService]
})
export class AppComponent implements OnInit{
  title = 'app';

  productList: any=[];
  productCategoriesList: ProductCategory[]

  constructor(private productService:ProductsService, private productCategoryService :ProductCategoryService) {
  }

  ngOnInit(): void {
    this.productList=this.productService.productList;
    this.productCategoriesList=this.productCategoryService.productCategoriesList;
  }
}
