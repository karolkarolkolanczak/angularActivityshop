import { Component, OnInit } from '@angular/core';
import { ProductsService } from './product/products.service';
import { ProductCategoryService } from './product/product-category.service';
import { ProductCategory } from './product/productCategory.model';
import { Product } from './product/product.model';
import { GenderService } from './product/gender.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProductsService,ProductCategoryService]
})
export class AppComponent implements OnInit{
  title = 'app';

  productList: Product[]=[];
  productCategoriesList: ProductCategory[];
  genderList: string[];

  constructor(private productService:ProductsService, private productCategoryService:ProductCategoryService, private genderService:GenderService) {
  }

  ngOnInit(): void {
    this.productList=this.productService.getProductList();
    this.productCategoriesList=this.productCategoryService.getProductCategoriesList();
    this.genderList=this.genderService.getGenderList();
  }
}
