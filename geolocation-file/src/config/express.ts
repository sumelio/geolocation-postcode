import express from "express";
import fileUpload from 'express-fileupload';

export const app = express();
app.use(fileUpload());