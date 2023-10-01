import { TestBed } from '@angular/core/testing';

import { OrderdeactivateService } from './orderdeactivate.service';

describe('OrderdeactivateService', () => {
  let service: OrderdeactivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderdeactivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
