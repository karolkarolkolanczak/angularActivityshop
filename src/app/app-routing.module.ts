import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductCategoriesListComponent } from './product/product-categories-list/product-categories-list.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductItemComponent } from './product/product-list/product-item/product-item.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

const appRoutes: Routes=[
  {path: '', component: ProductCategoriesListComponent},
  {path: 'productCategory/:id', component: ProductComponent,
    children:[
      {path: '', component: ProductListComponent},
      {path: 'product/:productId', component: ProductDetailsComponent }
     ]
  },
  // {path: 'productCategoriesList', component: ProductCategoriesListComponent},
  // {path: 'productList', component: ProductListComponent},
  // {path: 'productCategories', component: ProductComponent}
];

@NgModule({

  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
