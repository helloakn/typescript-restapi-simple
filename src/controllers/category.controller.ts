import {IEvent} from '../common/common.interfaces'
import {HttpRequest,HttpResponse} from '../common/common.types'

import {StatusCode} from '../common/common.response.statuscode'
const { Success } = StatusCode

import {CategoryModel,TCategoryModel} from '../models/model.category'

export const HelloEvent: IEvent = (req: HttpRequest, res: HttpResponse): void =>{
  // let categoryModel : TCategoryModel = {
  //   id:1,
  //   name:"hello cateogyr;"
  // }

  let categoryModel = new CategoryModel<TCategoryModel>();
  categoryModel.hello();
  res.status(Success.OK).send(categoryModel.hello());
}
