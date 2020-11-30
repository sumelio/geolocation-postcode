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
exports.endProcess = exports.onPostcode = exports.isParameterValid = exports.createProcessGetPostCodes = exports.postcodeProcessById = void 0;
const axios_1 = __importDefault(require("axios"));
const process_model_1 = __importDefault(require("../model/process.model"));
const geoPostcode_model_1 = __importDefault(require("../model/geoPostcode.model"));
const config_1 = require("../config");
const process_dto_1 = require("../dto/process.dto");
const getPostcodeFromResult = (result) => (Array.isArray(result) && result.length > 0) ? result[0].postcode : result.postcode;
const setPostcode = (result, process, geoPostcodeDto) => __awaiter(void 0, void 0, void 0, function* () {
    if (result) {
        process.counter.ok += 1;
        geoPostcodeDto.postcode = getPostcodeFromResult(result);
    }
    else {
        process.counter.nodata += 1;
        geoPostcodeDto.detail = 'No Data Found';
    }
});
const postcodeProcessById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const find = yield process_model_1.default.findOne({ processId: id });
    return find;
});
exports.postcodeProcessById = postcodeProcessById;
const createProcessGetPostCodes = (processId) => __awaiter(void 0, void 0, void 0, function* () {
    const process = new process_dto_1.ProcessDto(processId, new Date());
    process.state = process_dto_1.State.START;
    const processModel = new process_model_1.default(process.toObject());
    yield processModel.save();
    process.id = processModel.id;
    return process;
});
exports.createProcessGetPostCodes = createProcessGetPostCodes;
const savePostcode = (geoPostcodeDto) => __awaiter(void 0, void 0, void 0, function* () {
    const { lon, lat } = geoPostcodeDto;
    const find = yield geoPostcode_model_1.default.findOne({ lon, lat });
    if (find && find.id) {
        yield geoPostcode_model_1.default.update({ id: find.id }, geoPostcodeDto);
    }
    else {
        const geoPostcode = new geoPostcode_model_1.default(geoPostcodeDto);
        yield geoPostcode.save();
    }
});
const isParameterValid = (req) => req && req.body && req.body.processId;
exports.isParameterValid = isParameterValid;
const onPostcode = (readable, process) => ({ lon, lat }) => __awaiter(void 0, void 0, void 0, function* () {
    readable.pause();
    const geoPostcodeDto = {
        lon,
        lat,
        detail: undefined
    };
    const { data: { status, result } } = yield axios_1.default.get(`${config_1.API_POSTCODE_OI}?lon=${lon}&lat=${lat}`);
    if (status === 200) {
        setPostcode(result, process, geoPostcodeDto);
    }
    else {
        process.counter.error += 1;
        geoPostcodeDto.detail = status;
    }
    process.state = process_dto_1.State.PROCESSING;
    yield savePostcode(geoPostcodeDto);
    yield process_model_1.default.update({ _id: process.id }, process.toObject());
    setTimeout(() => {
        console.debug(process.counter);
        readable.resume();
    }, 1);
});
exports.onPostcode = onPostcode;
const endProcess = (process, state) => () => __awaiter(void 0, void 0, void 0, function* () {
    process.endDate = new Date();
    process.state = state;
    console.debug(process.toObject());
    yield process_model_1.default.update({ _id: process.id }, process.toObject());
});
exports.endProcess = endProcess;
//# sourceMappingURL=postcode.service.js.map