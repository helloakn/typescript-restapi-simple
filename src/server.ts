import express from 'express';
import * as bodyparser from 'body-parser';
import cors from 'cors'

import Debug from './lib/debug'
import MainRouter from './router/main.router'
import CommonRoutesConfig from './common/common.routes.config';
import Database from './common/common.database'

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

    let routesList = mainRouter.getRouters();

    console.log('METHOD','\t','URL');
    
    routesList.forEach((route: CommonRoutesConfig)=>{
      Debug.logs(Debug.Colors.FgMagenta,route.getRouteName(),Debug.Colors.Reset)
      route.showRouteList()
    });

    this.httpSvr.listen(this.port, () => {
      Debug.log(`Server running at http://localhost:${this.port}`)
    });
  }
}