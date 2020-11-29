import { Request, Response } from 'express';
import { PATH_FILE } from '../config'

const isFileValid = (req: Request) => {
    return !req.files || Object.keys(req.files).length === 0 || !req.files.postcodesgeo
}

const callbackFileAndNext = (res: Response, fileProcessId: number, next: any) => (err) => {
    if (err) {
        return res.status(500).send(err);
    }

    setTimeout( () =>  next(fileProcessId), 1)
    res.send(`File uploaded! And it is going to be processed with the id: ${fileProcessId}`);
  }


const moveFile = (req: Request, res: Response, next: any) : void => {
    const fileProcessId = (new Date()).getTime()

    req.files.postcodesgeo.mv( `${PATH_FILE}${fileProcessId}.cvs`, callbackFileAndNext(res, fileProcessId, next));
}

export const uploadFile = (req, res, next): Response => {

    if (isFileValid(req)) {
         return res.status(400).send('No postcodesgeo file was uploaded. File is not valid');
    }
    moveFile(req, res, next)
}