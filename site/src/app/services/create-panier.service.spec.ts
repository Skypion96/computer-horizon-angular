import { TestBed } from '@angular/core/testing';

import { CreatePanierService } from './create-panier.service';

describe('CreatePanierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreatePanierService = TestBed.get(CreatePanierService);
    expect(service).toBeTruthy();
  });
});
