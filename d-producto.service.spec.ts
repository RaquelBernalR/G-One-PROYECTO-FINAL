import { TestBed } from '@angular/core/testing';

import { DProductoService } from './d-producto.service';

describe('DProductoService', () => {
  let service: DProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
