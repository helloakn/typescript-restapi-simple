import Express from 'express';

import Debug from '../lib/debug'

import {IEvent} from './common.interfaces'
import {TRouteObject} from './common.types'


export default abstract class CommonRoutesConfig {
  private routesList: Array<TRouteObject> = [];

  constructor(public httpServer: Express.Application, public routeName: string, public routePrefix: string) {
    this.configureRoutes();
  }

  getRouteName() {
    return this.routeName;
  }

  getRouteList(): Array<TRouteObject>{
    return this.routesList
  }

  showRouteList(): void{
    this.routesList.forEach((x: TRouteObject)=> {
      Debug.logs(
        Debug.Colors.FgCyan,`[${Debug.Colors.FgYellow+x.method+Debug.Colors.FgCyan}]`,
        '     \t',
        Debug.Colors.FgGreen,x.url,
        Debug.Colors.Reset)
    });
  }

  setRoute(methods : Array<string>, url: string, event:IEvent): void{
    let route = this.httpServer.route(`${this.routePrefix+url}`);
    methods.forEach(method=>{
      let tmpRoute: TRouteObject = {method:method, url: this.routePrefix + url}
      this.routesList.push(tmpRoute);

      switch(method){
        case 'post':
          route.post(event);
          break;
  
        case 'get':
          route.get(event);
          break;
      }//end Switch
    }) //end forEach
  }

  abstract configureRoutes(): Express.Application;
  
}
