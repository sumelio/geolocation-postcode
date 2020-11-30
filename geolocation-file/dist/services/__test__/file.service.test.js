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
const file_service_1 = require("../file.service");
const message_1 = require("../../constants/message");
describe('TEST FILE SERVICES UploadFile', () => {
    test('The service update should return UPLOAD_OK', () => __awaiter(void 0, void 0, void 0, function* () {
        const files = { postcodesgeo: { mv: (dir, callback) => { callback(); } } };
        const next = () => { return ''; };
        const result = yield file_service_1.uploadFile(files, next);
        expect(result.includes(message_1.UPLOAD_OK)).toBeTruthy();
    }));
    test('The service update should return an Error', () => __awaiter(void 0, void 0, void 0, function* () {
        const MESSAGE_ERROR = 'Produce any error';
        const files = { postcodesgeo: { mv: (dir, callback) => { callback(MESSAGE_ERROR); } } };
        const next = () => { return ''; };
        try {
            yield file_service_1.uploadFile(files, next);
            fail('Test fail');
        }
        catch (error) {
            expect(error).toBe(MESSAGE_ERROR);
        }
    }));
});
describe('TEST FILE SERVICES isFileValid', () => {
    test('The service isFileValid should return TRUE', () => __awaiter(void 0, void 0, void 0, function* () {
        const files = { postcodesgeo: { mv: (dir, callback) => { callback(); } } };
        const result = file_service_1.isFileValid(files);
        expect(result).toBeTruthy();
    }));
    test('The service isFileValid should return FALSE', () => __awaiter(void 0, void 0, void 0, function* () {
        const files = { nothing: { mv: (dir, callback) => { callback(); } } };
        const result = file_service_1.isFileValid(files);
        expect(result).toBeFalsy();
    }));
});
//# sourceMappingURL=file.service.test.js.map