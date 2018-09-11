import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {ProductCategory} from '../productCategory.model';
import {Product} from '../product.model';


@Component({
  selector: 'app-product-categories-list',
  templateUrl: './product-categories-list.component.html',
  styleUrls: ['./product-categories-list.component.css']
})
export class ProductCategoriesListComponent implements OnInit {

  @Output() categorySelectedFromList=new EventEmitter<ProductCategory>();

  productCategories: ProductCategory[]=[
    new ProductCategory('shoes','http://www.personal.psu.edu/oeo5025/jpg.jpg' ),
    new ProductCategory('jackets','http://www.personal.psu.edu/oeo5025/jpg.jpg' ),
    new ProductCategory('socks','http://www.personal.psu.edu/oeo5025/jpg.jpg' ),
    new ProductCategory('t-shirts', 'http://www.personal.psu.edu/oeo5025/jpg.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

  print(text:string) {
    console.log('text: '+text);
  }

  selectedCategory(productCategory: ProductCategory){
    console.log('product-categories-list.component: Product category selected: '+productCategory);
    this.categorySelectedFromList.emit(productCategory);
  }
}
