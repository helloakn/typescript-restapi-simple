import express from 'express';
import * as bodyparser from 'body-parser';
import cors from 'cors'

import Debug from './lib/debug'
import MainRouter from './router/main.router'

export default class Server {
  private httpSvr: express.Application;

  constructor(public port: number | string, public host: string = 'localhost'){
    this.port = port;
    this.host = host;

    this.httpSvr = express();
  }

  init(): void{
    this.httpSvr.use(bodyparser.json());
    this.httpSvr.use(cors());
  
    const mainRouter = new MainRouter(this.httpSvr);
    mainRouter.setUp();

    this.httpSvr.listen(this.port, () => {
      //console.log(`Server running at http://localhost:${this.port}`);
      console.log('hello')
      Debug.log('aa').warning('cc').log('haha');
      
      let deb = new Debug();
      console.log(deb)
      //Debug.log('this is log').warning('this is warning')
      Debug.log(`Server running at http://localhost:${this.port}`)
    });
  }
}