import {CommonRoutesConfig} from '../common/common.routes.config';
import Express from 'express';

interface IEvent {
  (req: Express.Request, res: Express.Response): void;
}

export class CategoryRoutes extends CommonRoutesConfig {

  constructor(httpServer: Express.Application,routeName: string, routePrefix: string) {
      super(httpServer,routeName,routePrefix);
  }

  configureRoutes() {

    let RestEvent: IEvent = function(req: Express.Request, res: Express.Response){
      res.status(200).send(`hello world or hello universe`);
    }

    this.setRoute(['get','post'],'/hello',RestEvent)
    this.setRoute(['get'],'/hi',RestEvent)

    return this.httpServer;
  }
}