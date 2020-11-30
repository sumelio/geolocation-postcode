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
exports.upload = void 0;
const file_service_1 = require("../services/file.service");
const integrate_service_1 = require("../services/integrate.service");
const upload = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!file_service_1.isFileValid(req.files)) {
            return res.status(400).send('No postcodesgeo file was uploaded. File is not valid');
        }
        const result = yield file_service_1.uploadFile(req.files, integrate_service_1.sendFileProcessId);
        res.send(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.upload = upload;
//# sourceMappingURL=file.controller.js.map