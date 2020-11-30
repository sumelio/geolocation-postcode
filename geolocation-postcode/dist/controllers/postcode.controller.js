"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postcode = void 0;
const fs = __importStar(require("fs"));
const csv_parser_1 = __importDefault(require("csv-parser"));
const date_fns_1 = require("date-fns");
const message_1 = require("../constants/message");
const config_1 = require("../config");
const process_dto_1 = require("../dto/process.dto");
const postcode_service_1 = require("../services/postcode.service");
const postcode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body.fileName);
        // console.log(`${PATH_FILE}${req.body.fileName}`)
        const process = new process_dto_1.ProcessDto(date_fns_1.format(new Date(), message_1.FORMAT_DATE_LARGE));
        try {
            const readable = fs.createReadStream(`${config_1.PATH_FILE}${req.body.fileName}`).pipe(csv_parser_1.default());
            readable
                .on('data', postcode_service_1.onPostcode(readable, process))
                .on('end', postcode_service_1.endProcess(process));
        }
        catch (error) {
            console.error(error);
            process.error = error;
        }
        finally {
            // save process
        }
        res.send(message_1.OK);
    }
    catch (error) {
        // await errorProcess(req)
        res.status(500).send(error);
    }
});
exports.postcode = postcode;
//# sourceMappingURL=postcode.controller.js.map