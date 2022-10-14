import { TestBed } from '@angular/core/testing';

import { LiService } from './li.service';

describe('LiService', () => {
  let service: LiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
