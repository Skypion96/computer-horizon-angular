import { TestBed } from '@angular/core/testing';

import { CreateOrdiService } from './create-ordi.service';

describe('CreateOrdiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateOrdiService = TestBed.get(CreateOrdiService);
    expect(service).toBeTruthy();
  });
});
