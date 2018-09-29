import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductCategory} from '../../productCategory.model';
import { ProductCategoryService } from '../../product-category.service';

@Component({
  selector: 'app-product-categories-item',
  templateUrl: './product-categories-item.component.html',
  styleUrls: ['./product-categories-item.component.css']
})
export class ProductCategoriesItemComponent implements OnInit {

  @Input() productCategory: ProductCategory[];
  @Output() selectedCategoryItem=new EventEmitter();

  constructor(private productCategoryService: ProductCategoryService) { }

  ngOnInit() {
  }

  // productCategorySelected(){
  //   this.selectedCategoryItem.emit();
  // }
  productCategorySelected(){
    this.productCategoryService.categorySelected.emit(this.productCategory);
  }

}
