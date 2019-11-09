import { TestBed } from '@angular/core/testing';

import { OrdiServiceService } from './ordi-service.service';

describe('OrdiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdiServiceService = TestBed.get(OrdiServiceService);
    expect(service).toBeTruthy();
  });
});
