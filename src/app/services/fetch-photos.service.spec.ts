import { TestBed } from '@angular/core/testing';

import { FetchPhotosService } from './fetch-photos.service';

describe('FetchPhotosService', () => {
  let service: FetchPhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchPhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
