import { TestBed } from '@angular/core/testing';

import { MuService } from './mu.service';

describe('MuService', () => {
  let service: MuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
