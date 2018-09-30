import { EventEmitter, Injectable } from '@angular/core';
import { ProductCategory } from './productCategory.model';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  // cross Component Comunication
  // categorySelected=new EventEmitter<ProductCategory>();


  private productCategoriesList: ProductCategory[]=[
    new ProductCategory(1,'Jackets','assets/images/jacket1.jpg' ),
    new ProductCategory(2,'Shoes','assets/images/shoe1.jpg'),
    new ProductCategory(3,'Socks','assets/images/sock1.jpg'),
    new ProductCategory(4,'T-shirts', 'assets/images/tshirt1.jpg'),
    new ProductCategory(5,'Earrings', 'assets/images/earrings1.jpg'),
    new ProductCategory(6,'Necklaces', 'assets/images/necklace1.jpg'),
    new ProductCategory(7,'Purses', 'assets/images/purse1.jpg'),
    new ProductCategory(8,'Watches', 'assets/images/watch1.jpg'),
  ];

  constructor() { }

  getProductCategoriesList():ProductCategory[]{
    return this.productCategoriesList;
  }

  getProductCategoryById(id: number){
    const productCategory: ProductCategory = this.productCategoriesList.find(
      (s) => {
        return s.productCategoryId === id;
      }
    );
    console.log("FROM CATEGORY SERVICE: "+productCategory.productCategoryId+" "+productCategory.name);
    return productCategory;
  }

}
