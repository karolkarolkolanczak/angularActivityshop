import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { FooterComponent } from './footer/footer.component';
import { ProductCategoriesListComponent } from './product/product-categories-list/product-categories-list.component';
import { ProductCategoriesItemComponent } from './product/product-categories-list/product-categories-item/product-categories-item.component';
import { ProductItemComponent } from './product/product-list/product-item/product-item.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ProductsService } from './product/products.service';
import { ProductCategoryService } from './product/product-category.service';
import { GenderService } from './product/gender.service';
import { ProductCategoriesTabItemComponent } from './product/product-categories-list/product-categories-tab-item/product-categories-tab-item.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductEditComponent,
    FooterComponent,
    ProductCategoriesListComponent,
    ProductCategoriesItemComponent,
    ProductItemComponent,
    ProductAddComponent,
    DropdownDirective,
    ProductCategoriesTabItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProductsService, ProductCategoryService,GenderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
