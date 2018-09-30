import { Component, Input, OnInit } from '@angular/core';
import { ProductCategory } from '../../productCategory.model';
import { ProductCategoryService } from '../../product-category.service';

@Component({
  selector: 'app-product-categories-tab-item',
  templateUrl: './product-categories-tab-item.component.html',
  styleUrls: ['./product-categories-tab-item.component.css']
})
export class ProductCategoriesTabItemComponent implements OnInit {

  @Input() productCategory: ProductCategory;

  constructor(private productCategoryService: ProductCategoryService) { }

  ngOnInit() {
  }

  // productCategorySelected(){
  //   this.productCategoryService.categorySelected.emit(this.productCategory);
  // }

}
