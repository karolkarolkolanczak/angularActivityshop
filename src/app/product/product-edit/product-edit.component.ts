import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductCategory } from '../productCategory.model';
import { ProductsService } from '../products.service';
import { ProductCategoryService } from '../product-category.service';
import { GenderService } from '../gender.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
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
  product: Product;


  constructor(private productService:ProductsService, private productCategoryService: ProductCategoryService,private route: ActivatedRoute, private genderService:GenderService,private router: Router) { }

  ngOnInit() {
    this.productCategoriesList=this.productCategoryService.getProductCategoriesList();
    this.genderList=this.genderService.getGenderList();

      this.route.params
        .subscribe(
          (params: Params) => {
            // let numberId = +params['id'];
            let productId = +params['productId'];
            console.log("FROM ProductEditComponent:  productId: "+productId);
            // this.productCategory = this.productCategoryService.getProductCategoryById(numberId);
            this.product=this.productService.getProductById(productId);
            console.log("FROM ProductEditComponent TWO: productId: "+productId+" "+this.product.name);
          }
        );
  }

  saveEditedProduct(){
    this.productService.updateProductById(this.product);
    // '/productCategory',productCategory.productCategoryId,'product',product.productId]
    const productCategoryId=this.productCategoryService.getProductCategoryByName(this.product.category).productCategoryId;
    this.router.navigate(['/productCategory/'+productCategoryId+'/product/'+this.product.productId]);
  }
}
