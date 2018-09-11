import { Component, OnInit } from '@angular/core';
import {ProductCategory} from './productCategory.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  selectedProductCategory:ProductCategory;

  constructor() { }

  ngOnInit() {
  }
  categorySelectedMain(value) {
    console.log('categorySelectedMain: ' +value);
    this.selectedProductCategory=value;
    console.log("selected name: form product componnent: "+this.selectedProductCategory.name);
  }

}
