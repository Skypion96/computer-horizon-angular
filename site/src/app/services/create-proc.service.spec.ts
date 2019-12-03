import { TestBed } from '@angular/core/testing';

import { CreateProcService } from './create-proc.service';

describe('CreateProcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateProcService = TestBed.get(CreateProcService);
    expect(service).toBeTruthy();
  });
});
