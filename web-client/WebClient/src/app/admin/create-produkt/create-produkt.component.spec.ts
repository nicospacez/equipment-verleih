import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProduktComponent } from './create-produkt.component';

describe('CreateProduktComponent', () => {
  let component: CreateProduktComponent;
  let fixture: ComponentFixture<CreateProduktComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProduktComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProduktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
