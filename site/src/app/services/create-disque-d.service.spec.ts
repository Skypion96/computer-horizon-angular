import { TestBed } from '@angular/core/testing';

import { CreateDisqueDService } from './create-disque-d.service';

describe('CreateDisqueDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateDisqueDService = TestBed.get(CreateDisqueDService);
    expect(service).toBeTruthy();
  });
});
