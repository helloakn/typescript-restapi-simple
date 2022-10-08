import express from 'express';

import {CommonRoutesConfig} from '../common/common.routes.config';

import {UsersRoutes} from '../users/users.routes.config';

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

    this.routes.push(new UsersRoutes(this.httpSvr,'user-routes','/users'));

  }
}