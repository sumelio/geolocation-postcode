import { isFileValid, uploadFile } from '../services/file.service'
import { sendFileProcessId as next } from '../services/integrate.service'

export const upload = async (req, res) => {
   try {

      if ( ! isFileValid(req.files)) {
         return res.status(400).send('No postcodesgeo file was uploaded. File is not valid');
      }
      const result = await uploadFile(req.files, next)
      res.send(result);
   } catch (error) {
      res.status(500).send(error)
   }
}