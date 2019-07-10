// tslint:disable-next-line: quotemark
import { Controller } from "../interfaces/controller.interface";
import express from 'express';
import cheerio from 'cheerio';
import request from "request-promise";
import SearchResult from '../interfaces/search-result.interface';
class ScraperController implements Controller {
    router = express.Router();
    path = '/scraper';

    constructor(){
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}/`, this.search);
    }
   async search(req: express.Request, res: express.Response,next: express.NextFunction) {
        const query = req.query.scraper;
        const url1 = `https://www.bayt.com/ar/egypt/jobs/q/${query}`;
        const url2 = `https://eg.indeed.com/jobs?q=${query}`;
        const baytArr: any = [];
        const indeedArr: any = [];
        const firstResponse = await request(url1);
        const secondResponse = await request(url2);
        let $ =  cheerio.load(firstResponse);
        $('.has-pointer-d').each((i,e)=>{
            const link =  'https://www.bayt.com/' + $(e).find('.t-regular >a').attr('href');
            const title =  $(e).find('.t-regular >a').text().trim();
            const description =  $(e).find('.t-small').text().trim();
            const obj = {
                link,
                title,
                description
            };
            baytArr.push( obj);
        });
        $ = cheerio.load(secondResponse);

        $('.jobsearch-SerpJobCard').each((i,e)=>{
            const link =  'https://eg.indeed.com/'+$(e).find('.title >a').attr('href');
            const title =  $(e).find('.title >a').text().trim();
            const description =  $(e).find('.summary').text().trim();
            const obj = {
                link,
                title,
                description
            };
            indeedArr.push(obj);
        });
        const AllArr: SearchResult[] = baytArr.concat(indeedArr);
        res.send(AllArr);
    }


}
export default ScraperController;
