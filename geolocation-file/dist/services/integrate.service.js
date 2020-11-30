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
exports.sendFileProcessId = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config");
const sendFileProcessId = (fileProcessId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Start to call ' + fileProcessId + `  url ${config_1.GEOLOCATION_POSTCODE}/v1/geolocation-postcode/api/postcode`);
    try {
        const result = yield axios_1.default({
            method: 'post',
            url: `${config_1.GEOLOCATION_POSTCODE}/v1/geolocation-postcode/api/postcode`,
            headers: {},
            data: {
                processId: fileProcessId
            }
        });
        return result.data.message;
    }
    catch (error) {
        console.error(error);
    }
    return null;
});
exports.sendFileProcessId = sendFileProcessId;
//# sourceMappingURL=integrate.service.js.map