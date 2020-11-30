export class Counter {

    private _ok: number = 0
    private _nodata: number = 0
    private _error: number = 0

    get ok(): number {
        return this._ok;
    }
    set ok(value: number) {
        this._ok = value;
    }
    get nodata(): number {
        return this._nodata;
    }
    set nodata(value: number) {
        this._nodata = value;
    }
    get error(): number {
        return this._error;
    }
    set error(value: number) {
        this._error = value;
    }

    toObject = () => ({
       ok: this._ok,
       nodata: this._nodata,
       error: this._error
    } )
 }