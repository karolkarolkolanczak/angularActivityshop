export class ProductCategory{

  productCategoryId:number;
  name:string;
  image: string;

  constructor(productCategoryId:number,name: string,image: string) {
    this.productCategoryId=productCategoryId;
    this.name = name;
    this.image=image;
  }
}
