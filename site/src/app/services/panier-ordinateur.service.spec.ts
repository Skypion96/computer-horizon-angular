import { TestBed } from '@angular/core/testing';

import { PanierOrdinateurService } from './panier-ordinateur.service';

describe('PanierOrdinateurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PanierOrdinateurService = TestBed.get(PanierOrdinateurService);
    expect(service).toBeTruthy();
  });
});
