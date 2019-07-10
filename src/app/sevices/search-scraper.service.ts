import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import SearchResult from './search-result.interface';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchScraperService {
  private searchResArray : SearchResult[];
  private query : string;
  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  getQuery(): any{
    this.route.queryParams
      .subscribe(params => {
        this.query = params.scraper;
      });
  }
  getSearchResult(): Observable<SearchResult[]>{
    this.getQuery();
    return this.http.get<SearchResult[]>(`http://localhost:3000/scraper/?scraper=${this.query}`);
  }
}
