import { TestBed, inject } from '@angular/core/testing';

import { SamplerService } from './sampler.service';

describe('SamplerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SamplerService]
    });
  });

  it('should be created', inject([SamplerService], (service: SamplerService) => {
    expect(service).toBeTruthy();
  }));
});
