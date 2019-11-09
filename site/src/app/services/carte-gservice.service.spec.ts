import { TestBed } from '@angular/core/testing';

import { CarteGServiceService } from './carte-gservice.service';

describe('CarteGServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarteGServiceService = TestBed.get(CarteGServiceService);
    expect(service).toBeTruthy();
  });
});
