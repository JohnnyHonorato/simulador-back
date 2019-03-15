import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';
import db from '../src/models/index'

let database = null;

export default function (app) {
  if (!database) {
    const config = app.config;
    const sequelize = db.sequelize;

    database = {
      sequelize,
      Sequelize,
      models: {},
    };

    sequelize.sync().done(() => database);
    }
    return database;
  }
  