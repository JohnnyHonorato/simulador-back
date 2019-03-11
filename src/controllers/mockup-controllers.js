'use strict';
import HttpStatus from 'http-status';

const defaultResponse = (data, statusCode = HttpStatus.OK) => ({
  data,
  statusCode,
});

const errorResponse = (message, statusCode = HttpStatus.BAD_REQUEST) => defaultResponse({
    error: message,
  }, statusCode);

class MockupController {
    constructor(Mockup) {
        this.Mockup = Mockup;
    }

    getAll() {
        return this.Mockup.findAll({})
        .then(result => defaultResponse(result))
        .catch(error => errorResponse(error.message));
    }
}

export default MockupController;