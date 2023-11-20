import { TestBed } from '@angular/core/testing';

import { BillsToPayService } from './bills-to-pay.service';

describe('BillsToPayService', () => {
  let service: BillsToPayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillsToPayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
