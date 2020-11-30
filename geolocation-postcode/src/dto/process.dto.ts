import { Counter } from "./counter.dto"

export class ProcessDto  {

    constructor( startDate: string ) {
        this._startDate = startDate
        this._counter = new Counter()
    }

    private _counter : Counter
    private _error: string
    private _startDate : string
    private _endDate: string

    get counter(): Counter {
        return this._counter;
    }
    set counter(value: Counter) {
        this._counter = value;
    }

    get error(): string {
        return this._error;
    }
    set error(value: string) {
        this._error = value;
    }

    get startDate(): string {
        return this._startDate;
    }
    set startDate(value: string) {
        this._startDate = value;
    }

    get endDate(): string {
        return this._endDate;
    }
    set endDate(value: string) {
        this._endDate = value;
    }
 }
