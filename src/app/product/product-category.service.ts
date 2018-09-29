import { EventEmitter, Injectable } from '@angular/core';
import { ProductCategory } from './productCategory.model';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  // cross Component Comunication
  categorySelected=new EventEmitter<ProductCategory>();

  private productCategoriesList: ProductCategory[]=[
    new ProductCategory('shoes','http://www.personal.psu.edu/oeo5025/jpg.jpg' ),
    new ProductCategory('jackets','http://www.personal.psu.edu/oeo5025/jpg.jpg' ),
    new ProductCategory('socks','http://www.personal.psu.edu/oeo5025/jpg.jpg' ),
    new ProductCategory('t-shirts', 'http://www.personal.psu.edu/oeo5025/jpg.jpg'),
  ];

  constructor() { }

  getProductCategoriesList():ProductCategory[]{
    return this.productCategoriesList.slice();
  }

}
