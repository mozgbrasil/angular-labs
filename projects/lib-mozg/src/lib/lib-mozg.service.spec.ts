import { TestBed } from '@angular/core/testing';

import { LibMozgService } from './lib-mozg.service';

describe('LibMozgService', () => {
  let service: LibMozgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibMozgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
