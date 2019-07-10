import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ScraperComponent } from './scraper/scraper.component';
import { SearchScraperService } from './sevices/search-scraper.service';
import {HttpClientModule} from '@angular/common/http';
const appRoutes: Routes = [
  { path: 'home/:query', component: ScraperComponent },
  { path: '**', component: ScraperComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ScraperComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [SearchScraperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
