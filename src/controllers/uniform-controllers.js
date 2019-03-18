'use strict';
import HttpStatus from 'http-status';
import db from '../models/index';

const defaultResponse = (data, statusCode = HttpStatus.OK) => ({
  data,
  statusCode,
});

const errorResponse = (message, statusCode = HttpStatus.BAD_REQUEST) => defaultResponse({
  error: message,
}, statusCode);

class UniformController {
  constructor() {
    this.Uniform = db.Uniform;
  }

  getAll() {
    return this.Uniform.findAll({})
      .then(result => defaultResponse(result))
      .catch(error => errorResponse(error.message));
  }

  getById(params) {
    return this.Uniform.findOne({
      where: params,
    })
      .then(result => defaultResponse(result))
      .catch(error => errorResponse(error.message));
  }

  add(data) {
    return this.Uniform.create(data)
      .then(result => defaultResponse(result, HttpStatus.CREATED))
      .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
  }

  delete(params) {
    return this.Uniform.destroy({
      where: params,
    })
    .then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
    .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
  }

  getByMockup(params) {
    return this.Uniform.findAll({
    where: {
        mockup_id: params.id,
        }
    })
    .then(result => defaultResponse(result))
    .catch(error => errorResponse(error.message));
  }
}

export default UniformController;