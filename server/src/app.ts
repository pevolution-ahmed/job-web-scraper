import express from 'express';
import * as bodyParser from 'body-parser';
import { Controller } from './interfaces/controller.interface';

class App {

  app: express.Application;
  port: number;
  constructor(controllers :Controller[] , port:number) {
    this.app = express();
    this.port = port;
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
  private initializeControllers(controllers:Controller[]) {
    controllers.forEach((controller) => {
      this.app.use('/',controller.router);
        });
  }
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

  }
}


export default App;
