import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchYummyComponent } from './search-yummy.component';

describe('SearchYummyComponent', () => {
  let component: SearchYummyComponent;
  let fixture: ComponentFixture<SearchYummyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchYummyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchYummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
