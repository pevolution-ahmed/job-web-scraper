import ScraperController from './scraper/scraper.controller';
import App from './app';
const app = new App([new ScraperController()], 3000);

app.listen();

