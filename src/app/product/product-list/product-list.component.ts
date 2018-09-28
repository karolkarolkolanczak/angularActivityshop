import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product.model';
import { ProductCategory } from '../productCategory.model';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent {

  @Input() productCategory:ProductCategory;
  @Output() productSelectedFromList=new EventEmitter<Product>();

  constructor(private productService:ProductsService) {
  }

  searchListOfProductsByCategory(productCategory: ProductCategory): Product[]{
    return this.productService.searchProductListByCategory(productCategory);
  }

  selectedProduct(product: Product){
    this.productSelectedFromList.emit(product);
  }

}
