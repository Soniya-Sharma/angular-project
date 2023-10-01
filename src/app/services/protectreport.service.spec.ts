import { TestBed } from '@angular/core/testing';

import { ProtectreportService } from './protectreport.service';

describe('ProtectreportService', () => {
  let service: ProtectreportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProtectreportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
