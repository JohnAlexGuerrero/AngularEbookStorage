import { TestBed } from '@angular/core/testing';

import { LocalDataStorageService } from './local-data-storage.service';

describe('LocalDataStorageService', () => {
  let service: LocalDataStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalDataStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
