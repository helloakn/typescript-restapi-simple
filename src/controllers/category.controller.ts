import {IEvent} from '../common/common.interfaces'
import {HttpRequest,HttpResponse} from '../common/common.types'

import {StatusCode} from '../common/common.response.statuscode'
const { Success } = StatusCode

import {CategoryModel,TCategoryModel} from '../models/model.category'

export const HelloEvent: IEvent = async (req: HttpRequest, res: HttpResponse): Promise<void> =>{
  let categoryModel = new CategoryModel<TCategoryModel>();
  categoryModel.hello();
  let row : TCategoryModel = {
    name: "this is name",
    image: 'this is image',
    description: 'this is description',
    created_at: new Date('2022-04-24 04:48:15'),
    updated_at: new Date('2022-04-24 04:48:15')
  }
  let category = await categoryModel.insert(row)
  console.log(category)
  res.status(Success.OK).send(categoryModel.hello());
}
