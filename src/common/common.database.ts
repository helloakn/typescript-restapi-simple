import mysql from "mysql2";

import config from './common.globalConfig'

const { DatabaseConfig } = config

// const dbConnection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PWD,
//   database: process.env.DB_NAME
// });

const dbConnection = mysql.createConnection({
    host: DatabaseConfig.host,
    user: DatabaseConfig.user,
    password: DatabaseConfig.password,
    database: DatabaseConfig.database
  });

export interface IDatabaseConfig {
  host: string;
  user: string;
  password: string;
  database: string;
}


export type TMySqlConnection = mysql.Connection;

export default class Database {
  public dbConnection : TMySqlConnection;

  constructor(){
    this.dbConnection = dbConnection
    console.log('database.constructor')
  }



}