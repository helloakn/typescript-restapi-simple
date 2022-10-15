/*
*
*
*
*
*
*
*
*
*/

import Database from './common.database'

interface Tid {
  id?: number;
}

interface IBaseModel<T> extends Database{
  tableName: string;
  insert(data: T): Promise<T>;
  getById(id:number) : T;
}

type TDBError =  {
  isError: boolean,
  message: string,
  data: any
} 
/*
return -> {isError:true/false,message:'something',data:{...}}
*/

export default class Table<T  extends { id?: number }> extends Database implements IBaseModel<T> {
  
  constructor(public tableName:string){
    super();
  }

  insert(data: T): Promise<T> {
    return new Promise<T>((resolve,reject) => {
      this.dbConnection.query(`INSERT INTO ${this.tableName} SET ?`, data, (err, res) => {
        if (err) {
          reject(err)
          return;
        }
        data.id = res.insertId
        resolve(data);
      });
    })
  }
  
  hello():string{
   // console.log(this.dbConnection)
    return "this is hello fun test"
  }

  getById(id:number) : T {
    let i : T = {} as T;
    return i
  }

}