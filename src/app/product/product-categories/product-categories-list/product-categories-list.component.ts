import {Component, Inject, Input, OnInit} from '@angular/core';
import {ProductCategory} from '../../productCategory.model';

@Component({
  selector: 'app-product-categories-list',
  templateUrl: './product-categories-list.component.html',
  styleUrls: ['./product-categories-list.component.css']
})
export class ProductCategoriesListComponent implements OnInit {

// productCategories: ProductCategory[]=[
//   new ProductCategory('shoes','http://www.personal.psu.edu/oeo5025/jpg.jpg' ),
//   new ProductCategory('jackets','http://www.personal.psu.edu/oeo5025/jpg.jpg' ),
//   new ProductCategory('socks','http://www.personal.psu.edu/oeo5025/jpg.jpg' ),
//   new ProductCategory('t-shirts', 'http://www.personal.psu.edu/oeo5025/jpg.jpg'),
// ];
@Input() productCategoriesInjected: ProductCategory[];

  constructor() { }

  ngOnInit() {
  }

}
