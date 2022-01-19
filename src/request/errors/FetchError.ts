class FetchError {
  _originalError: any;
  constructor(error: unknown) {
    this._originalError = error;
  }

  toString() {
    if (this._originalError && this._originalError.toString) {
      return this._originalError.toString();
    }
    return "Fetch Error";
  }
}

export default FetchError;
