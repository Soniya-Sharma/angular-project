import { TestBed } from '@angular/core/testing';

import { UploadorderService } from './uploadorder.service';

describe('UploadorderService', () => {
  let service: UploadorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
