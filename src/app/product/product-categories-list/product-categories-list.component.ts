import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {ProductCategory} from '../productCategory.model';
import {Product} from '../product.model';
import { ProductCategoryService } from '../product-category.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-product-categories-list',
  templateUrl: './product-categories-list.component.html',
  styleUrls: ['./product-categories-list.component.css']
})
export class ProductCategoriesListComponent implements OnInit {

  productCategoriesList: ProductCategory[];
  productCategory: ProductCategory;

  constructor(private productCategoryService: ProductCategoryService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.productCategoriesList=this.productCategoryService.getProductCategoriesList();

    this.route.params
      .subscribe(
        (params: Params) => {
          let numberId = +params['id'];
          console.log(" "+numberId);
          this.productCategory = this.productCategoryService.getProductCategoryById(numberId);
        }
      );
  }

  isRouteProductCategory(): boolean{
    return (this.router.url==="/");
  }

  isRouteProduct(): boolean{
    return this.router.url.startsWith('/productCategory/');
  }
}
