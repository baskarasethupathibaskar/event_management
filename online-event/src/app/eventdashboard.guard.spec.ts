import { TestBed } from '@angular/core/testing';

import { EventdashboardGuard } from './eventdashboard.guard';

describe('EventdashboardGuard', () => {
  let guard: EventdashboardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EventdashboardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
