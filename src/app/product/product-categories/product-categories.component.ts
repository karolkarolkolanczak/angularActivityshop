import { Component, OnInit } from '@angular/core';
import {ProductCategory} from '../productCategory.model';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {

  productCategories: ProductCategory[]=[
    new ProductCategory('shoes','http://www.personal.psu.edu/oeo5025/jpg.jpg' ),
    new ProductCategory('jackets','http://www.personal.psu.edu/oeo5025/jpg.jpg' ),
    new ProductCategory('socks','http://www.personal.psu.edu/oeo5025/jpg.jpg' ),
    new ProductCategory('t-shirts', 'http://www.personal.psu.edu/oeo5025/jpg.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }


}
