import {ProductCategory} from './productCategory.model';

export class  Product {
  name: string;
  description: string;
  price: number;
  image: string;
  productCategory: string;

  constructor(name: string, description: string, price: number, image: string, productCategory: string) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
    this.productCategory = productCategory;
  }
}
