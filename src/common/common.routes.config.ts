import Express from 'express';
/* ok hahah */
export abstract class CommonRoutesConfig {
  httpServer: Express.Application;
  routeName: string;
  routePrefix: string;

  constructor(httpServer: Express.Application, routeName: string, routePrefix: string) {
      this.httpServer = httpServer;
      this.routeName = routeName; 
      this.routePrefix = routePrefix;

      this.configureRoutes();
  }

  getRouteName() {
      return this.routeName;
  }

  abstract configureRoutes(): Express.Application;
  
}
