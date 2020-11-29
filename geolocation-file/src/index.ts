import express from "express";
import fileUpload from 'express-fileupload';
const app = express();
app.use(fileUpload());

const port = 8100;

const PATH_FILE = process.env.FILES_PATH  || 'tmp/'

const isFileValid = (req: Express.Request) => !req.files || Object.keys(req.files).length === 0 || !req.files.postcodesgeo

const executePostcode = (fileProcessId: number) => {
    console.log('Start to call executePostcode...' +fileProcessId +' '+ process.env.GEOLOCATION_POSTCODE)
}

app.post( "/upload", ( req, res) => {

    if (isFileValid(req)) {
         return res.status(400).send('No postcodesgeo file was uploaded.');
    }
    const fileProcessId = (new Date()).getTime()
    req.files.postcodesgeo.mv( `${PATH_FILE}${fileProcessId}.cvs`, (err) => {
        if (err) {
            return res.status(500).send(err);
        }

        console.log(`${PATH_FILE}${fileProcessId}.cvs`)
        setTimeout( () =>  executePostcode(fileProcessId), 1)
        res.send(`File uploaded! And it is going to be processed with the id: ${fileProcessId}`);
      });
} );



app.listen( port, () => {
    console.log(`Server is running on port ${port}.`);
} );