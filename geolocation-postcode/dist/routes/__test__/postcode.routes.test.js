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
const express_1 = require("../../config/express");
const supertest_1 = __importDefault(require("supertest"));
const postcode_routes_1 = require("../postcode.routes");
describe('Test Files Routes', () => {
    let req;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        postcode_routes_1.routes(express_1.app);
    }));
    beforeEach(() => {
        req = supertest_1.default(express_1.app);
    });
    describe('POST - Validation successfully', () => {
        test('Should respond with status 200', (done) => {
            req
                .post(`/v1/api/upload`)
                .attach('postcodesgeo', 'src/routes/__test__/postcodesgeo1.csv')
                .end((_, res) => {
                expect(res.status).toBe(200);
                done();
            });
        });
        test('Should respond with status 400', (done) => {
            req
                .post(`/v1/api/upload`)
                .end((_, res) => {
                expect(res.status).toBe(400);
                done();
            });
        });
    });
});
//# sourceMappingURL=postcode.routes.test.js.map