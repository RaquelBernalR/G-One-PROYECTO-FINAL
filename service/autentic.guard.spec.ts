import { TestBed } from '@angular/core/testing';

import { AutenticGuard } from './autentic.guard';

describe('AutenticGuard', () => {
  let guard: AutenticGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutenticGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
