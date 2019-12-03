import { TestBed } from '@angular/core/testing';

import { CreateCarteGService } from './create-carte-g.service';

describe('CreateCarteGService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateCarteGService = TestBed.get(CreateCarteGService);
    expect(service).toBeTruthy();
  });
});
