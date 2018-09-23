import {Component, Input, OnInit} from '@angular/core';
import {ProductCategory} from '../productCategory.model';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() productCategory:ProductCategory;
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
