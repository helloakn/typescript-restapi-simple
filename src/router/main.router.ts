import express from 'express';

import CommonRoutesConfig from '../common/common.routes.config';

import {CategoryRoutes} from './category.routes';

export default class MainRouter {

  private httpSvr: express.Application = express();
  private routes: Array<CommonRoutesConfig> = [];

  constructor(httpSvr : express.Application){
    this.httpSvr = httpSvr;
  }

  getRouters(): Array<CommonRoutesConfig>{
    return this.routes;
  }

  setUp(): void{

    this.routes.push(new CategoryRoutes(this.httpSvr,'Category Routes','/categories'));
    this.routes.push(new CategoryRoutes(this.httpSvr,'Demo Routes','/cc'));

  }
}