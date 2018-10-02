import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import {ProductCategory} from '../productCategory.model';
import { Product } from '../product.model';
import { ProductCategoryService } from '../product-category.service';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productCategory:ProductCategory;
  product: Product;
  modalRef: BsModalRef;
  message: string;

  constructor(private productCategoryService: ProductCategoryService,private productService: ProductsService,private route: ActivatedRoute,private router: Router,private modalService: BsModalService) {

  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          let numberId = +params['id'];
          let productId = +params['productId'];
          console.log('PARAMS'+params);
          console.log('FROM ProductDetailsComponent:  numberId: '+numberId+' productId: '+productId);
          // this.productCategory = this.productCategoryService.getProductCategoryById(numberId);
          this.product=this.productService.getProductById(productId);
          console.log('FROM ProductDetailsComponent:  numberId: '+numberId+' productId: '+productId+' '+this.product.name);
        }
      );
  }
  redirectToEditProduct(){
    this.router.navigate(['/editProduct/'+this.product.productId]);
  }

  redirectToDeleteProduct(){
    const productCategoryId=this.productCategoryService.getProductCategoryByName(this.product.category).productCategoryId;
    this.productService.deleteProductById(this.product);
    this.router.navigate(['/productCategory/'+productCategoryId]);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    // this.message = 'Confirmed!';
    this.modalRef.hide();
    this.redirectToDeleteProduct();
  }

  decline(): void {
    // this.message = 'Declined!';
    this.modalRef.hide();
  }
}
