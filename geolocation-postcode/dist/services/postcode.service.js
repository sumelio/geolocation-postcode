"use strict";
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
exports.endProcess = exports.onPostcode = void 0;
const axios_1 = __importDefault(require("axios"));
const date_fns_1 = require("date-fns");
const config_1 = require("../config");
const message_1 = require("../constants/message");
const saveResult = (result, process) => {
    if (result) {
        process.counter.ok += 1;
        // save mongo geolocation with postcode
    }
    else {
        process.counter.nodata += 1;
        // geolocation without postcode
    }
};
const onPostcode = (readable, process) => (row) => __awaiter(void 0, void 0, void 0, function* () {
    readable.pause();
    const { data: { status, result } } = yield axios_1.default.get(`${config_1.API_POSTCODE_OI}?lon=${row.lon}&lat=${row.lat}`);
    // console.log('data', result )
    if (status === 200) {
        saveResult(result, process);
    }
    else {
        process.counter.error += 1;
        // geolocation error
    }
    setTimeout(() => {
        console.debug(process.counter);
        readable.resume();
    }, 1);
});
exports.onPostcode = onPostcode;
const endProcess = (process) => () => {
    process.endDate = date_fns_1.format(new Date(), message_1.FORMAT_DATE_LARGE);
    console.debug('CSV file successfully processed');
    console.debug(process);
};
exports.endProcess = endProcess;
//# sourceMappingURL=postcode.service.js.map