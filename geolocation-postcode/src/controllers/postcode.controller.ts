import * as fs from 'fs';
import csv from 'csv-parser'
import { format } from 'date-fns'

import { FORMAT_DATE_LARGE, OK } from '../constants/message'
import { PATH_FILE } from '../config'
import { ProcessDto } from '../dto/process.dto';
import { onPostcode, endProcess } from '../services/postcode.service'


export const postcode = async (req, res) => {
   try {
      console.log(req.body.fileName)

      // console.log(`${PATH_FILE}${req.body.fileName}`)
      const process = new ProcessDto(format(new Date(), FORMAT_DATE_LARGE))

      try {
         const readable = fs.createReadStream(`${PATH_FILE}${req.body.fileName}`).pipe(csv())

         readable
            .on('data', onPostcode(readable, process))
            .on('end', endProcess(process));

      } catch (error) {
         console.error(error)
         process.error = error
      } finally {
         // save process

      }
      res.send(OK);
   } catch (error) {
      // await errorProcess(req)
      res.status(500).send(error)
   }
}





