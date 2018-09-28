import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  @ViewChild('productName') productName:ElementRef;
  @ViewChild('productDescription') productDescription:ElementRef;
  @ViewChild('productPrice') productPrice:ElementRef;
  @ViewChild('productCategory') productCategory:ElementRef;
  @ViewChild('productColor') productColor:ElementRef;
  @ViewChild('productMaterial') productMaterial:ElementRef;
  @ViewChild('productWeight') productWeight:ElementRef;
  @ViewChild('productGender') productGender:ElementRef;
  @ViewChild('productImage') productImage:ElementRef;

  constructor(private productService:ProductsService) { }

  ngOnInit() {
  }
  saveNewProduct(){
    const name=this.productName.nativeElement.value;
    const description=this.productDescription.nativeElement.value;
    const price=this.productPrice.nativeElement.value;
    const category=this.productCategory.nativeElement.value;
    const color=this.productColor.nativeElement.value;
    const material=this.productMaterial.nativeElement.value;
    const weight=this.productWeight.nativeElement.value;
    const gender=this.productGender.nativeElement.value;
    const image=this.productImage.nativeElement.value;
    const newProduct=new Product(name,description,price,category,color,material,weight,gender,image);
    this.productService.addProdcut(newProduct);

  }
}
