/*
Interfaces for Express
*/
import Express from 'express';

export interface IEvent {
  (req: Express.Request, res: Express.Response): void;
}
