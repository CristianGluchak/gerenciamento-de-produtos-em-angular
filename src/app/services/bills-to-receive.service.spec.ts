import { TestBed } from '@angular/core/testing';

import { BillsToReceiveService } from './bills-to-receive.service';

describe('BillsToReceiveService', () => {
  let service: BillsToReceiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillsToReceiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
