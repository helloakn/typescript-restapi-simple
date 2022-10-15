import mysql from 'mysql'
import config from './common.globalConfig'

const { DatabaseConfig } = config


export interface IDatabaseConfig {
  host: string;
  user: string;
  password: string;
  database: string;
}


//export type TOkPacket = OkPacket;
const dbConnection : mysql.Connection = mysql.createConnection({
    host: DatabaseConfig.host,
    user: DatabaseConfig.user,
    password: DatabaseConfig.password,
    database: DatabaseConfig.database
  });

  dbConnection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });
  

export type TMySqlConnection = mysql.Connection;

export default class Database {
  public dbConnection : TMySqlConnection;

  constructor(){
    this.dbConnection = dbConnection
    console.log('database.constructor')
  }
}