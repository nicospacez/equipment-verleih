import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetailViewComponent } from './products-detail-view.component';

describe('ProductsDetailViewComponent', () => {
  let component: ProductsDetailViewComponent;
  let fixture: ComponentFixture<ProductsDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
