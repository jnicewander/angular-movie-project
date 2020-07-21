import { TestBed } from '@angular/core/testing';

import { TheMovieDbApiService } from './the-movie-db-api.service';

describe('TheMovieDbApiService', () => {
  let service: TheMovieDbApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheMovieDbApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
