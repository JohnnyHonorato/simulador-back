'use strict';
import HttpStatus from 'http-status';
import db from '../models/index';
import bcrypt from 'bcrypt';

const defaultResponse = (data, statusCode = HttpStatus.OK) => ({
  data,
  statusCode,
});

const errorResponse = (message, statusCode = HttpStatus.BAD_REQUEST) => defaultResponse({
  error: message,
}, statusCode);

class UserController {
  constructor() {
    this.User = db.User;
  }

  getAll() {
    return this.User.findAll({})
      .then(result => defaultResponse(result))
      .catch(error => errorResponse(error.message));
  }

  getById(params) {
    return this.User.findOne({
      where: params,
    })
      .then(result => defaultResponse(result))
      .catch(error => errorResponse(error.message));
  }

  add(data) {
    let login = data.login;
    let password = data.password;
    let role = data.role;
    
    return bcrypt.hash(data.password, 12).then((result) => {
      this.User.create({login:login, password:result, role:role})
    })
      .then(result => defaultResponse(result, HttpStatus.CREATED))
      .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
  }

  delete(params) {
    return this.User.destroy({
      where: {id: params.id},
    })
      .then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
      .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
  }
}

export default UserController;