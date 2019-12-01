import { TestBed } from '@angular/core/testing';

import { PanierCarteGraphiqueService } from './panier-carte-graphique.service';

describe('PanierCarteGraphiqueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PanierCarteGraphiqueService = TestBed.get(PanierCarteGraphiqueService);
    expect(service).toBeTruthy();
  });
});
