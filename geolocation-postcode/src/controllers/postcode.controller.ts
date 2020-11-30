
import { State } from '../dto/process.dto'
import { getReadableCsv } from '../services/file.service'
import {  OK } from '../constants/message'

import { onPostcode, endProcess, createProcessGetPostCodes, isParameterValid } from '../services/postcode.service'

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
            res.send(OK);
      } catch (error) {
         console.error(error)
         process.error = error
         endProcess(process, State.ERROR)
         res.status(500).send(error)
      }
}





