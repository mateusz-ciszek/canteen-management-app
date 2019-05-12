import { TestBed } from '@angular/core/testing';

import { SupplyPageableListService } from './supply-pageable-list.service';

describe('SupplyPageableListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SupplyPageableListService = TestBed.get(SupplyPageableListService);
    expect(service).toBeTruthy();
  });
});
