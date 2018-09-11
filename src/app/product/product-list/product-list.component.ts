import { Component, Input, OnInit } from '@angular/core';
import {Product} from '../product.model';
import { ProductCategory } from '../productCategory.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() productCategory:ProductCategory;

  productList: Product[]=[
    new Product('shoe 1','description shoe 1',1.00,'','shoes'),
    new Product('shoe 2','description shoe 2',2.00,'','shoes'),
    new Product('jacket 1','description jacket 1',3.00,'','jackets'),
    new Product('jacket 2','description jacket 2',4.00,'','jackets'),
    new Product('socks 1','description socks 1',5.00,'','socks'),
    new Product('socks 2','description socks 2',6.00,'','socks'),
    new Product('t-shirt 1','description t-shirt 2',7.00,'','t-shirts'),
    new Product('t-shirt 2','description t-shirt 2',8.00,'','t-shirts')
  ];
  constructor() {
    // console.log("INIT: ")+this.productCategory.name();
  }

  ngOnInit() {
    console.log("INIT: ")+this.productCategory.name;
  }

  searchListOfProductsByCategory(productCategory: ProductCategory): Product[]{
    let filteredListOfProducts: Product[]=[];

    for(let value of this.productList){

      if(value.productCategory == productCategory.name){
        filteredListOfProducts.push(value);
      }
    }
    return  filteredListOfProducts;
  }

}
