import { TestBed } from '@angular/core/testing';

import { PanierProcService } from './panier-proc.service';

describe('PanierProcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PanierProcService = TestBed.get(PanierProcService);
    expect(service).toBeTruthy();
  });
});
