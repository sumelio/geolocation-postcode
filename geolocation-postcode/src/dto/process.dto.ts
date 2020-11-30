import { Counter } from "./counter.dto"

export class ProcessDto  {

    constructor( fileName: string, startDate: Date ) {
        this._fileName = fileName
        this._startDate = startDate
        this._counter = new Counter()
    }

    private _fileName : string
    private _counter : Counter
    private _error: string
    private _startDate : Date
    private _endDate: Date

    get fileName(): string {
        return this._fileName;
    }
    set fileName(value: string) {
        this._fileName = value;
    }

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

    get startDate(): Date {
        return this._startDate;
    }
    set startDate(value: Date) {
        this._startDate = value;
    }

    get endDate(): Date {
        return this._endDate;
    }
    set endDate(value: Date) {
        this._endDate = value;
    }

    toObject: any = () => ({
      fileName: this.fileName,
      startDate: this.startDate,
      endDate: this.endDate,
      counter: this.counter.toObject()
    })
 }
