import { TestBed } from '@angular/core/testing';

import { MozgLibService } from './lib-mozg.service';

describe('MozgLibService', () => {
  let service: MozgLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MozgLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
