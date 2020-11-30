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
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = exports.isFileValid = void 0;
const message_1 = require("../constants/message");
const config_1 = require("../config");
const moveFile = (files, next, fileProcessId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield new Promise((resolve, reject) => {
        files.postcodesgeo.mv(`${config_1.PATH_FILE}${fileProcessId}.csv`, (err) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                return reject(err);
            }
            const reslult = yield next(fileProcessId);
            resolve(`${message_1.UPLOAD_OK}${reslult}`);
        }));
    });
    return result;
});
const getFileProcessId = () => (new Date()).getTime();
const isFormatValid = (cvs) => {
    // implement validation forma CVS
    return true;
};
const isFileValid = (files) => {
    return files && Object.keys(files).length > 0 && files.postcodesgeo && isFormatValid(files.postcodesgeo);
};
exports.isFileValid = isFileValid;
const uploadFile = (files, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield moveFile(files, next, getFileProcessId());
    return result;
});
exports.uploadFile = uploadFile;
//# sourceMappingURL=file.service.js.map