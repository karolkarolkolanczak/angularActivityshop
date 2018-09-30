import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductCategory} from '../../productCategory.model';
import { ProductCategoryService } from '../../product-category.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-categories-item',
  templateUrl: './product-categories-item.component.html',
  styleUrls: ['./product-categories-item.component.css']
})
export class ProductCategoriesItemComponent implements OnInit {

  @Input() productCategory: ProductCategory;

  constructor(private productCategoryService: ProductCategoryService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          let numberId = +params['id'];
          console.log("FROM ProductCategoriesItemComponent:  "+numberId);
          this.productCategory = this.productCategoryService.getProductCategoryById(numberId);
        }
      );
  }



}
