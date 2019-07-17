import { TestBed, inject } from '@angular/core/testing';

import { ExoplanetService } from './exoplanet.service';

describe('ExoplanetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExoplanetService]
    });
  });

  it('should be created', inject([ExoplanetService], (service: ExoplanetService) => {
    expect(service).toBeTruthy();
  }));
});
