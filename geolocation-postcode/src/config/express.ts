import express from "express";
import * as  bodyParser from 'body-parser'
export const app = express();
// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
// form-urlencoded