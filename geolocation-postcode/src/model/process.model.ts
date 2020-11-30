
import {Schema, Document, model, Model} from 'mongoose'
import { Counter } from 'src/dto/counter.dto'

interface IProcessDocument extends Document {
  fileName: string
  startDate: Date
  endDate: Date
  counter : Counter
  error: string

}

const processSchema = new Schema<IProcessDocument>({
  fileName: {type: String, required: true},
  startDate: {type: Date, default: Date.now},
  endDate: {type: Date},
  counter: {type: Object},
  error: {type: String}
}, {strict: true})
  .index({fileName: 1}, {unique: true, collation: {locale: 'en_US', strength: 1}, sparse: true})

export interface IProcessModel extends Model<IProcessDocument> {
  // collection/docouments level operations (fetch one or many, update, save back to db)
}

export const Process: IProcessModel = model<IProcessDocument, IProcessModel>('Process', processSchema)

export default Process
