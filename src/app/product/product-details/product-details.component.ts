import {Component, Input, OnInit} from '@angular/core';
import {ProductCategory} from '../productCategory.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() productCategory:ProductCategory;

  constructor() { }

  ngOnInit() {
  }

}
