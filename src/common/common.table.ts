
import Database from './common.database'

interface IBaseModel<T> extends Database{
  tableName: string
  //insert(...msgs: string[]) : void
  insert(data: T) : void
  getById(id:number) : T
}
/*
return -> {status:true/false,message:'something',data:{...}}
*/

export default class Table<T> extends Database implements IBaseModel<T> {
//class BaseModel<T> implements IBaseModel<T> {
  //dbConnection inherient property
  constructor(public tableName:string){
    super();
  }

  // insert(...data: string[]) : void {

  // }
  insert(data: T): void {
    
  }
  hello():string{
    console.log(this.dbConnection)
    return "this is hello fun"
  }

  getById(id:number) : T {
    let i : T = {} as T;
    return i
  }

}