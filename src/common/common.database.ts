import mysql from "mysql2";

export interface IDatabaseConfig {
  host: string;
  user: string;
  password: string;
  database: string;
}

export type TMySqlConnection = mysql.Connection;

export default class Database {

  private _config : IDatabaseConfig;
  private _dbC : TMySqlConnection;

  constructor(dbConfig : IDatabaseConfig){
    this._config = dbConfig;
    this._dbC = mysql.createConnection(this._config);
  }

  init(): TMySqlConnection{
    return this._dbC
  }

}