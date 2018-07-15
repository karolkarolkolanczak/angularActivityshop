import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { FooterComponent } from './footer/footer.component';
import {ProductCategoriesListComponent} from './product/product-categories-list/product-categories-list.component';
import {ProductCategoriesItemComponent} from './product/product-categories-list/product-categories-item/product-categories-item.component';

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
    ProductCategoriesItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
