class UnknownError {
  private _status: number;
  private _statusText: string;

  constructor(status: number, statusText: string) {
    this._status = status;
    this._statusText = statusText;
  }

  get status() {
    return this._status;
  }

  get statusText() {
    return this._statusText;
  }

  toString() {
    return `Unknown Error: ${this._status} ${this._statusText}`;
  }
}

export default UnknownError;
