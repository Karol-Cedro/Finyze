import { TestBed } from '@angular/core/testing';

import { Bonds } from './bonds';

describe('Bonds', () => {
  let service: Bonds;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Bonds);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
