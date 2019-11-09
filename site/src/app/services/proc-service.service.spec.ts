import { TestBed } from '@angular/core/testing';

import { ProcServiceService } from './proc-service.service';

describe('ProcServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProcServiceService = TestBed.get(ProcServiceService);
    expect(service).toBeTruthy();
  });
});
