import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // products: Product[] = [
  //   new Product('shoe 1','blue shoe',12.00,'https://upload.wikimedia.org/wikipedia/commons/9/9c/Aldrin_Apollo_11.jpg','shoees'),
  //   new Product('shoe 2','red shoe',24.00,'image2',{{productCate}}),
  //   new Product('shoe 3','yellow shoe',36.00,'image3'),
  //   new Product('shoe 4','dark shoe',48.00,'image4')
  // ];

  constructor() { }

  ngOnInit() {
  }

}
