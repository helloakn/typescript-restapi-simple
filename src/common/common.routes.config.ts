import Express from 'express';



interface IEvent {
  (req: Express.Request, res: Express.Response): void;
}

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

  setRoute(methods : Array<string>, url: string, event:IEvent): void{
    let route = this.httpServer.route(`${this.routePrefix+url}`);
    methods.forEach(method=>{
      switch(method){
        case 'post':
          console.log(`${this.routePrefix+url}`)
          route.post(event);
          break;
  
        case 'get':
          console.log(`${this.routePrefix+url}`)
          route.get(event);
          break;
      }//end Switch
    }) //end forEach
  }

  abstract configureRoutes(): Express.Application;
  
}
