import { TestBed } from '@angular/core/testing';

import { YummiesService } from './yummies.service';

describe('YummiesService', () => {
  let service: YummiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YummiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
