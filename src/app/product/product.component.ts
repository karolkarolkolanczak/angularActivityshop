import { Component, OnInit } from '@angular/core';
import {ProductCategory} from './productCategory.model';
import { Product } from './product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  selectedProductCategory:ProductCategory;
  selectedProduct: Product;

  constructor() { }

  ngOnInit() {
  }
  categorySelectedMain(value) {
    this.selectedProductCategory=value;
  }
  productSelectedMain(value) {
    this.selectedProduct=value;
  }
  addNewProduct(){
    // this.router.navigate(["product.add"]);
  }
}
