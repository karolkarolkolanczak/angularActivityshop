import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoriesItemComponent } from './product-categories-item.component';

describe('ProductCategoriesItemComponent', () => {
  let component: ProductCategoriesItemComponent;
  let fixture: ComponentFixture<ProductCategoriesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCategoriesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoriesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
