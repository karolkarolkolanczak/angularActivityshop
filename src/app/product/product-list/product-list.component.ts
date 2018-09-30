import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product.model';
import { ProductCategory } from '../productCategory.model';
import { ProductsService } from '../products.service';
import { ProductCategoryService } from '../product-category.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent implements OnInit{

   // @Input() selectedProductCategory:ProductCategory;
  selectedProductCategory:ProductCategory;
  selectedProduct: Product;
  productCategoryId: number;
  productCategoriesList: ProductCategory[];

  constructor(private productCategoryService: ProductCategoryService, private productService: ProductsService, private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.productCategoriesList=this.productCategoryService.getProductCategoriesList();
    this.route.params
      .subscribe(
        (params: Params) => {
          let idNumber = +params['id'];
          console.log("ddddddddddddddd "+idNumber);
          this.selectedProductCategory = this.productCategoryService.getProductCategoryById(idNumber);
          console.log("FROm PRODUCT LIST: selectedProductCategory: "+this.selectedProductCategory.productCategoryId+" "+this.selectedProductCategory.name);
        }
      );
  }

  searchListOfProductsByCategory(productCategory: ProductCategory): Product[]{
    return this.productService.searchProductListByCategory(productCategory);
  }
}
