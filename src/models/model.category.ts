import Table from '../common/common.table'

export interface TCategoryModel {
  id?: number,
  name: string,
  image: string,
  description: string,
  created_at?: Date,
  updated_at?: Date,
  deleted_at?: Date
}

export class CategoryModel<T  extends { id?: number }> extends Table<T> {
  constructor(){
    super("tblCategory")
  }

}