import Table from '../common/common.table'

export type TCategoryModel = {
  id: number,
  name: string
}

export class CategoryModel<T> extends Table<T> {
  constructor(){
    super("tblCategory")
  }

}