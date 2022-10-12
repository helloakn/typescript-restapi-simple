/*
Interfaces for Express
*/
import Express from 'express';

export type TRouteObject = {
  method: string;
  url: string;
}

export type HttpRequest = Express.Request;
export type HttpResponse = Express.Response;