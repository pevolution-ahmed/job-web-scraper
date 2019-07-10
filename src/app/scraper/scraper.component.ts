import { Component, OnInit } from '@angular/core';
import { SearchScraperService } from 'app/sevices/search-scraper.service';
import SearchResult from 'app/sevices/search-result.interface';

@Component({
  selector: 'app-scraper',
  templateUrl: './scraper.component.html',
  styleUrls: ['./scraper.component.css']
})
export class ScraperComponent implements OnInit {
   searchRes: SearchResult[] = [];
  constructor(private searchScraper: SearchScraperService) { }

  ngOnInit() {
    this.searchScraper.getSearchResult().subscribe((result) => {
      this.searchRes = result ;
      console.log(result);
       });
  }

}
