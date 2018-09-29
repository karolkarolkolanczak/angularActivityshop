import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { ProductCategory } from './productCategory.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productList: Product[]=[
    new Product('shoe 1','description shoe 1',1.00,'shoes','shoes','cotton','123','male','image 1'),
    new Product('shoe 2','description shoe 2',2.00,'shoes','shoes','cotton','123','male','image 1'),
    new Product('shoe 3','description shoe 3',3.00,'shoes','shoes','cotton','123','male','image 1'),
    new Product('shoe 4','description shoe 4',4.00,'shoes','shoes','cotton','123','male','image 1'),
    new Product('shoe 5','description shoe 5',5.00,'shoes','shoes','cotton','123','male','image 1'),
    new Product('shoe 6','description shoe 6',6.00,'shoes','shoes','cotton','123','male','image 1'),
    new Product('jacket 1','description jacket 1',3.00,'jackets','red','cotton','123','male','image 1'),
    new Product('jacket 2','description jacket 2',4.00,'jackets','jackets','cotton','123','male','image 1'),
    new Product('socks 1','description socks 1',5.00,'socks','socks','cotton','123','male','image 1'),
    new Product('socks 2','description socks 2',6.00,'socks','socks','cotton','123','male','image 1'),
    new Product('t-shirt 1','description t-shirt 2',7.00,'t-shirts','t-shirts','cotton','123','male','image 1'),
    new Product('t-shirt 2','description t-shirt 2',8.00,'t-shirts','t-shirts','cotton','123','male','image 1')
  ];
  constructor() { }

  getProductList(): Product[]{
    return this.productList.slice();
  }

  addProdcut(product: Product){
    this.productList.push(product);
    console.log("product added(service): "+product.name+ " " +product.category+ " "+product.gender);
  }
  searchProductListByCategory(productCategory: ProductCategory): Product[]{
    let filteredListOfProducts: Product[]=[];

    for(let value of this.productList){
      if(value.category == productCategory.name){
        filteredListOfProducts.push(value);
      }
    }
    return  filteredListOfProducts;
  }
}




