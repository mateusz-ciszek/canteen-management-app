import { TestBed } from '@angular/core/testing';

import { CoalescingComponentFactoryResolverService } from './coalescing-component-factory-resolver.service';

describe('CoalescingComponentFactoryResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoalescingComponentFactoryResolverService = TestBed.get(CoalescingComponentFactoryResolverService);
    expect(service).toBeTruthy();
  });
});
