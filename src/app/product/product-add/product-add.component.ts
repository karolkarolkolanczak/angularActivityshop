import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';
import { ProductCategoryService } from '../product-category.service';
import { ProductCategory } from '../productCategory.model';
import { GenderService } from '../gender.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  @ViewChild('productId') productId:ElementRef;
  @ViewChild('productName') productName:ElementRef;
  @ViewChild('productDescription') productDescription:ElementRef;
  @ViewChild('productPrice') productPrice:ElementRef;
  @ViewChild('productCategory') productCategory:ElementRef;
  @ViewChild('productColor') productColor:ElementRef;
  @ViewChild('productMaterial') productMaterial:ElementRef;
  @ViewChild('productWeight') productWeight:ElementRef;
  @ViewChild('productGender') productGender:ElementRef;
  @ViewChild('productImage') productImage:ElementRef;
  productCategoriesList: ProductCategory[];
  genderList: string[];

  constructor(private productService:ProductsService, private productCategoriesService: ProductCategoryService, private genderService:GenderService,private router: Router) { }

  ngOnInit() {
    this.productCategoriesList=this.productCategoriesService.getProductCategoriesList();
    this.genderList=this.genderService.getGenderList();
  }

  saveNewProduct(){
    const productId=this.productService.getLastProductId()+1;
    const name=this.productName.nativeElement.value;
    const description=this.productDescription.nativeElement.value;
    const price=this.productPrice.nativeElement.value;
    const category=this.productCategory.nativeElement.value;
    const color=this.productColor.nativeElement.value;
    const material=this.productMaterial.nativeElement.value;
    const weight=this.productWeight.nativeElement.value;
    const gender=this.productGender.nativeElement.value;
    // const image=this.productImage.nativeElement.value;
    const image='assets/images/allProducts1.jpg';
    const newProduct=new Product(productId,name,description,price,category,color,material,weight,gender,image);
    this.productService.addProdcut(newProduct);
    const productCategoryId=this.productCategoriesService.getProductCategoryByName(category).productCategoryId;
    this.router.navigate(['/productCategory/'+productCategoryId]);
  }
}
