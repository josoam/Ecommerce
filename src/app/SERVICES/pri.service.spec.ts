import { TestBed } from '@angular/core/testing';

import { PriService } from './pri.service';

describe('PriService', () => {
  let service: PriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
