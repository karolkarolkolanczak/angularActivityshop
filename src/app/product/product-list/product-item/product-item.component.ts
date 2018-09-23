import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  @Output() selectedProductItem=new EventEmitter<Product>();
  constructor() { }

  ngOnInit() {
  }

  productSelected(){
    this.selectedProductItem.emit();
  }
}
