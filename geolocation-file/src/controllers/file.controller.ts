import { uploadFile } from '../services/file.service'
import { sendFileProcessId as next } from '../services/integrate.service'

export const upload = (req, res) => {
   try {
    uploadFile(req, res, next)
   }catch(error) {
    res.status(500).send(error)
   }
}