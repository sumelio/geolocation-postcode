import {Schema, Document, model, Model} from 'mongoose'
import { Counter } from 'src/dto/counter.dto'

interface IProcessDocument extends Document {
  processId: string
  state: string
  startDate: Date
  endDate: Date
  counter : Counter
  error: string
}

const processSchema = new Schema<IProcessDocument>({
  processId: {type: String, required: true},
  startDate: {type: Date, default: Date.now},
  endDate: {type: Date},
  state: {type: String},
  counter: {type: Object},
  error: {type: String}
}, {strict: true})
  .index({processId: 1}, {unique: true, collation: {locale: 'en_US', strength: 1}, sparse: true})

export interface IProcessModel extends Model<IProcessDocument> {
}

export const Process: IProcessModel = model<IProcessDocument, IProcessModel>('Process', processSchema)

export default Process
