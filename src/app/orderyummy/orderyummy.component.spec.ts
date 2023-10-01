import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderyummyComponent } from './orderyummy.component';

describe('OrderyummyComponent', () => {
  let component: OrderyummyComponent;
  let fixture: ComponentFixture<OrderyummyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderyummyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderyummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
