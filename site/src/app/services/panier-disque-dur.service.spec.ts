import { TestBed } from '@angular/core/testing';

import { PanierDisqueDurService } from './panier-disque-dur.service';

describe('PanierDisqueDurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PanierDisqueDurService = TestBed.get(PanierDisqueDurService);
    expect(service).toBeTruthy();
  });
});
