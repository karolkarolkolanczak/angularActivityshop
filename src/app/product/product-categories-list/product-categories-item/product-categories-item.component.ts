import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductCategory} from '../../productCategory.model';

@Component({
  selector: 'app-product-categories-item',
  templateUrl: './product-categories-item.component.html',
  styleUrls: ['./product-categories-item.component.css']
})
export class ProductCategoriesItemComponent implements OnInit {

  @Input() productCategoriesInjected: ProductCategory[];
  @Output() out=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  go(productCategoriesInjected){
    this.out.emit(productCategoriesInjected.name);
    console.log(productCategoriesInjected);
  }

}
