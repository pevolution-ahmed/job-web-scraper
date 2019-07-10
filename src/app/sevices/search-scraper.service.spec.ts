import { TestBed } from '@angular/core/testing';

import { SearchScraperService } from './search-scraper.service';

describe('SearchScraperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchScraperService = TestBed.get(SearchScraperService);
    expect(service).toBeTruthy();
  });
});
