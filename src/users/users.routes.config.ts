import express from 'express';

import CommonRoutesConfig from '../common/common.routes.config';

export class UsersRoutes extends CommonRoutesConfig {

  constructor(httpServer: express.Application,routeName: string, routePrefix: string) {
      super(httpServer,routeName,routePrefix);
  }

  configureRoutes() {
    
    this.httpServer.route(this.routePrefix+`/hello`)
    .get((req: express.Request, res: express.Response) => {
        res.status(200).send(`List of users`);
    })
    .post((req: express.Request, res: express.Response) => {
        res.status(200).send(`Post to users`);
    });
    return this.httpServer;
  }
}