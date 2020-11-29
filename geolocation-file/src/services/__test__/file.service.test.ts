import { uploadFile, isFileValid } from '../file.service'
import { UPLOAD_OK } from '../../constants/message';

describe('TEST FILE SERVICES UploadFile', () => {
  test('The service update should return UPLOAD_OK', async () => {
    const files = { postcodesgeo: { mv: (dir: string, callback: any) => { callback() } } }
    const next = () => { return '' }
    const result = await uploadFile(files, next)

    expect(result.includes(UPLOAD_OK)).toBeTruthy()
  })

  test('The service update should return an Error', async () => {
    const MESSAGE_ERROR = 'Produce any error'
    const files = { postcodesgeo: { mv: (dir: string, callback: any) => { callback(MESSAGE_ERROR) } } }
    const next = () => { return '' }
    try {
      await uploadFile(files, next)
      fail('Test fail')
    } catch (error) {
      expect(error).toBe(MESSAGE_ERROR)
    }
  })
})

describe('TEST FILE SERVICES isFileValid', () => {
  test('The service isFileValid should return TRUE', async () => {
    const files = { postcodesgeo: { mv: (dir: string, callback: any) => { callback() } } }
    const result = isFileValid(files)
    expect(result).toBeTruthy()
  })

  test('The service isFileValid should return FALSE', async () => {
    const files = { nothing: { mv: (dir: string, callback: any) => { callback() } } }
    const result = isFileValid(files)
    expect(result).toBeFalsy()
  })
})
