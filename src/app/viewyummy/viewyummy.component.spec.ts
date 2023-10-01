import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewyummyComponent } from './viewyummy.component';

describe('ViewyummyComponent', () => {
  let component: ViewyummyComponent;
  let fixture: ComponentFixture<ViewyummyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewyummyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewyummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
