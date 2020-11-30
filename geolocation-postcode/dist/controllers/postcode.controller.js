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
exports.postcode = exports.postcodeProcessById = void 0;
const process_dto_1 = require("../dto/process.dto");
const file_service_1 = require("../services/file.service");
const postcode_service_1 = require("../services/postcode.service");
const postcodeProcessById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isIdValid = req && req.params && req.params.id;
        if (!isIdValid) {
            return res.status(400).send('id parameter is not valid');
        }
        const { params: { id } } = req;
        const data = yield postcode_service_1.postcodeProcessById(id);
        res.json(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.postcodeProcessById = postcodeProcessById;
const postcode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('req', req.body);
    if (!postcode_service_1.isParameterValid(req)) {
        return res.status(400).send('processId parameter is not valid');
    }
    const process = yield postcode_service_1.createProcessGetPostCodes(req.body.processId);
    try {
        const readable = yield file_service_1.getReadableCsv(req.body.processId);
        readable
            .on('data', postcode_service_1.onPostcode(readable, process))
            .on('end', postcode_service_1.endProcess(process, process_dto_1.State.FINISHED))
            .on('error', postcode_service_1.endProcess(process, process_dto_1.State.ERROR));
        res.json({
            status: 200,
            message: `Get state of this process with: /v1/geolocation-postcode/api/postcode/process/${req.body.processId}`
        });
    }
    catch (error) {
        console.error(error);
        process.error = error;
        postcode_service_1.endProcess(process, process_dto_1.State.ERROR);
        res.status(500).send(error);
    }
});
exports.postcode = postcode;
//# sourceMappingURL=postcode.controller.js.map