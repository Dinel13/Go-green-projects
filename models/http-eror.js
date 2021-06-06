class HttpError extends Error {
  constructor(message, errorCode) {
    super(message); // menambahkan message ke properti
    this.code = errorCode; //menambhakan code ke properti
  }
}

module.exports = HttpError;
