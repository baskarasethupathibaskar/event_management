import { TestBed } from '@angular/core/testing';

import { Apiservice1Service } from './apiservice1.service';

describe('Apiservice1Service', () => {
  let service: Apiservice1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Apiservice1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
