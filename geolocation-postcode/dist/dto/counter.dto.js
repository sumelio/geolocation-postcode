"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = void 0;
class Counter {
    constructor() {
        this._ok = 0;
        this._nodata = 0;
        this._error = 0;
        this.toObject = () => ({
            ok: this._ok,
            nodata: this._nodata,
            error: this._error
        });
    }
    get ok() {
        return this._ok;
    }
    set ok(value) {
        this._ok = value;
    }
    get nodata() {
        return this._nodata;
    }
    set nodata(value) {
        this._nodata = value;
    }
    get error() {
        return this._error;
    }
    set error(value) {
        this._error = value;
    }
}
exports.Counter = Counter;
//# sourceMappingURL=counter.dto.js.map