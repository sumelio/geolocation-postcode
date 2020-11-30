import * as fs from 'fs';
import csv from 'csv-parser'
import { PATH_FILE } from '../config'

export const getReadableCsv = (processId: number) => {
    return fs.createReadStream(`${PATH_FILE}${processId}.csv`).pipe(csv())
}