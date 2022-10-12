import CommonRoutesConfig from '../common/common.routes.config';
import Express from 'express';

import { HelloEvent } from '../controllers/category.controller';
export class CategoryRoutes extends CommonRoutesConfig {

  constructor(httpServer: Express.Application,routeName: string, routePrefix: string) {
    super(httpServer,routeName,routePrefix);
  }

  configureRoutes() {

   

    this.setRoute(['get','post'],'/hello',HelloEvent)
    this.setRoute(['get'],'/hi',HelloEvent)
    //console.log(this.routePrefix)
    //console.table(this.getRouteList());
    return this.httpServer;
  }
}