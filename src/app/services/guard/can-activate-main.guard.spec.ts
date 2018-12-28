import { inject, TestBed } from '@angular/core/testing';

import { CanActivateMainGuard } from './can-activate-main.guard';

describe('CanActivateMainGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateMainGuard]
    });
  });

  it('should ...', inject([CanActivateMainGuard], (guard: CanActivateMainGuard) => {
    expect(guard).toBeTruthy();
  }));
});
