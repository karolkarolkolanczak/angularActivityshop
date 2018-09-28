import { Component, OnInit } from '@angular/core';
import { ProductsService } from './product/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProductsService]
})
export class AppComponent implements OnInit{
  title = 'app';

  productList: any=[];

  constructor(private productService:ProductsService) {
  }

  ngOnInit(): void {
    this.productList=this.productService.productList;
  }
}
