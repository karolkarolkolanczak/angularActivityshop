import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Product} from '../product.model';
import { ProductCategory } from '../productCategory.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[ProductsService]
})
export class ProductListComponent implements OnInit {

  @Input() productCategory:ProductCategory;
  @Output() productSelectedFromList=new EventEmitter<Product>();

  productList: any=[];

  constructor(private productService:ProductsService) {
  }

  ngOnInit() {
    this.productList=this.productService.productList;
  }

  searchListOfProductsByCategory(productCategory: ProductCategory): Product[]{
    let filteredListOfProducts: Product[]=[];

    for(let value of this.productList){

      if(value.category == productCategory.name){
        filteredListOfProducts.push(value);
      }
    }
    return  filteredListOfProducts;
  }
  selectedProduct(product: Product){
    this.productSelectedFromList.emit(product);
  }

  // newPrductAdded(product: Product){
  //   // this.productService.addProdcut(product)
  //   // this.productList.push(product);
  //   console.log("product added: "+product.name);
  // }
}
