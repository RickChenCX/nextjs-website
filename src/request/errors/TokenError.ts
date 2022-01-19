class TokenError {
  _message: string;

  constructor(message: string) {
    this._message = message;
  }

  get message() {
    return this._message;
  }

  toString() {
    return this._message;
  }
}

export default TokenError;
