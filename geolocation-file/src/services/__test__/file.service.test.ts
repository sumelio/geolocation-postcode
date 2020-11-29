import { Request } from 'express'
import { uploadFile } from '../file.service'
// Mock
// jest.mock('../../models/categories')
// jest.mock('../../../tags/models/tags')

describe('TEST CATEGORIES SERVICES', () => {
  test('The service update should return object', async () => {
    // Tags.find.mockResolvedValue(tagsData)
    // Tags.updateMany.mockResolvedValue({ res: 'OK' })
    // Categories.updateOne.mockResolvedValue({ res: 'OK' })
    // const data = { ...categories[0] }
    // delete data.companyId
    // delete data._id
    // const result = await update({ data, user: { companyId: '5a5e068d81ebf1002516af18' }, id: categories[0]._id })
    const req = ({ files: { postcodesgeo: { mv: () => { } } } }) 
    const resp = {send: () => {}}
    const next = () => {}
    const result = uploadFile(req, resp, next) 

    expect(result).toEqual({ res: 'OK' })
  })
})
