"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDto = void 0;
const counter_dto_1 = require("./counter.dto");
class ProcessDto {
    constructor(startDate) {
        this._startDate = startDate;
        this._counter = new counter_dto_1.Counter();
    }
    get counter() {
        return this._counter;
    }
    set counter(value) {
        this._counter = value;
    }
    get error() {
        return this._error;
    }
    set error(value) {
        this._error = value;
    }
    get startDate() {
        return this._startDate;
    }
    set startDate(value) {
        this._startDate = value;
    }
    get endDate() {
        return this._endDate;
    }
    set endDate(value) {
        this._endDate = value;
    }
}
exports.ProcessDto = ProcessDto;
//# sourceMappingURL=process.dto.js.map