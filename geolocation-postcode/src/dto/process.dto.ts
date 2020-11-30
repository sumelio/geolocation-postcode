import { Counter } from "./counter.dto"

export enum State {
    START = 'START',
    PROCESSING = 'PROCESSING',
    FINISHED = 'FINISHED',
    ERROR = 'ERROR',
}

export class ProcessDto  {

    constructor( processId: string, startDate: Date ) {
        this._processId = processId
        this._startDate = startDate
        this._counter = new Counter()
    }

    private _id : string
    private _state : State
    private _processId : string
    private _counter : Counter
    private _error: string
    private _startDate : Date
    private _endDate: Date

    get id(): string {
        return this._id;
    }
    set id(value: string) {
        this._id = value;
    }
    get state(): State {
        return this._state;
    }
    set state(value: State) {
        this._state = value;
    }

    get processId(): string {
        return this._processId;
    }
    set processId(value: string) {
        this._processId = value;
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
      processId: this.processId,
      state: this.state.toString(),
      startDate: this.startDate,
      endDate: this.endDate,
      counter: this.counter.toObject()
    })
 }
