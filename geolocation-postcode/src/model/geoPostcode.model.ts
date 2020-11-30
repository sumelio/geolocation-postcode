
import {Schema, Document, model, Model} from 'mongoose'

interface IGeoPostcodeDocument extends Document {
  lat: number
  lon: number
  postcode: string,
  detail: string
}

const geoPostcodeSchema = new Schema<IGeoPostcodeDocument>({
  lat: {type: Number, required: true},
  lon: {type: Number, required: true},
  postcode: {type: String},
  detail: {type: String}
}, {strict: true})
  .index({lat: 1, lon: 1}, {unique: true, collation: {locale: 'en_US', strength: 1}, sparse: true})

export interface IGeoPostcodeModel extends Model<IGeoPostcodeDocument> {
}

export const GeoPostcode: IGeoPostcodeModel = model<IGeoPostcodeDocument, IGeoPostcodeModel>('GeoPostcode', geoPostcodeSchema)

export default GeoPostcode
