const { StatusCodes } = require("http-status-codes")
const CustomAPIError = require("./custom-error")

class UnaunthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.sttusCode = StatusCodes.UNAUTHORIZED
  }
}

module.exports = UnaunthenticatedError
