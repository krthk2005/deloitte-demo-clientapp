import { TestBed } from '@angular/core/testing';

import { VillasListService } from './villas-list.service';

describe('VillasListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VillasListService = TestBed.get(VillasListService);
    expect(service).toBeTruthy();
  });
});
