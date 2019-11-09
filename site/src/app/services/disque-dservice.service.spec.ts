import { TestBed } from '@angular/core/testing';

import { DisqueDServiceService } from './disque-dservice.service';

describe('DisqueDServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisqueDServiceService = TestBed.get(DisqueDServiceService);
    expect(service).toBeTruthy();
  });
});
