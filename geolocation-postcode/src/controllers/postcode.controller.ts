import * as fs from 'fs';
import csv from 'csv-parser'
import { format } from 'date-fns'

import { FORMAT_DATE_LARGE, OK } from '../constants/message'
import { PATH_FILE } from '../config'
import { ProcessDto } from '../dto/process.dto';
import { onPostcode, endProcess } from '../services/postcode.service'
import Process from '../model/process.model'

export const postcode = async (req, res) => {
   try {
      console.log(req.body.fileName)

      // console.log(`${PATH_FILE}${req.body.fileName}`)
      const process = new ProcessDto(req.body.fileName, new Date())

      const processModel = new Process(process.toObject())
      await processModel.save()
      try {
         const readable = fs.createReadStream(`${PATH_FILE}${req.body.fileName}`).pipe(csv())

         readable
            .on('data', onPostcode(readable, process))
            .on('end', endProcess(process, processModel.id));

      } catch (error) {
         console.error(error)
         process.error = error
      }
      res.send(OK);
   } catch (error) {
      // await errorProcess(req)
      res.status(500).send(error)
   }
}





