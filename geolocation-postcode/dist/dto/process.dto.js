"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDto = exports.State = void 0;
const counter_dto_1 = require("./counter.dto");
var State;
(function (State) {
    State["START"] = "START";
    State["PROCESSING"] = "PROCESSING";
    State["FINISHED"] = "FINISHED";
    State["ERROR"] = "ERROR";
})(State = exports.State || (exports.State = {}));
class ProcessDto {
    constructor(processId, startDate) {
        this.toObject = () => ({
            processId: this.processId,
            state: this.state.toString(),
            startDate: this.startDate,
            endDate: this.endDate,
            counter: this.counter.toObject()
        });
        this._processId = processId;
        this._startDate = startDate;
        this._counter = new counter_dto_1.Counter();
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get state() {
        return this._state;
    }
    set state(value) {
        this._state = value;
    }
    get processId() {
        return this._processId;
    }
    set processId(value) {
        this._processId = value;
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