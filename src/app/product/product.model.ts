import {ProductCategory} from './productCategory.model';

export class  Product {
  name: string;
  description: string;
  price: number;
  category: string;
  color:string;
  material:string;
  weight:string;
  gender:string
  image: string;

  constructor(name: string, description: string, price: number, category: string,
  color:string, material:string, weight:string, gender:string, image: string) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.category=category;
    this.color=color;
    this.material=material;
    this.weight=weight;
    this.gender=gender;
    this.image = image;
  }
}
