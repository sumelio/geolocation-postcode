
import { State } from '../dto/process.dto'
import { getReadableCsv } from '../services/file.service'
import { OK } from '../constants/message'

import { onPostcode, endProcess, createProcessGetPostCodes, isParameterValid, postcodeProcessById as processById } from '../services/postcode.service'

export const postcodeProcessById = async (req, res) => {
   try {
      const isIdValid = req && req.params && req.params.id
      if( ! isIdValid) {
        return res.status(400).send('id parameter is not valid');
     }

      const { params: { id } } = req
      const data = await processById(id)
      res.json(data)
   } catch (error) {
      res.status(500).send(error)
   }
}
export const postcode = async (req, res) => {

   if (!isParameterValid(req)) {
      return res.status(400).send('processId parameter is not valid');
   }

   const process = await createProcessGetPostCodes(req.body.processId)

   try {
      const readable = getReadableCsv(req.body.processId)

      readable
         .on('data', onPostcode(readable, process))
         .on('end', endProcess(process, State.FINISHED))
         .on('error', endProcess(process, State.ERROR))
      res.json({
         status: 200,
         message: `Get state of this process with: /v1/geolocation-postcode/api/postcode/process/${req.body.processId}`
      });
   } catch (error) {
      console.error(error)
      process.error = error
      endProcess(process, State.ERROR)
      res.status(500).send(error)
   }
}