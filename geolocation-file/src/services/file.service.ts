import { UPLOAD_OK } from '../constants/message';
import { PATH_FILE } from '../config'

const moveFile = async (files: any, next: any, fileProcessId: number): Promise<string> => {

    const result: string = await new Promise((resolve, reject) => {
        files.postcodesgeo.mv(`${PATH_FILE}${fileProcessId}.cvs`, (err) => {
            if (err) {
                return reject(err);
            }
            setTimeout(() => next(fileProcessId), 1)
            resolve(`${UPLOAD_OK}${fileProcessId}`)
        })

    })
    return result
}

const getFileProcessId = () => (new Date()).getTime()

export const isFileValid = (files: any) => {
    return files && Object.keys(files).length > 0 && files.postcodesgeo
}

export const uploadFile = async (files, next): Promise<string> => {
    const result = await moveFile(files, next, getFileProcessId())
    return result
}