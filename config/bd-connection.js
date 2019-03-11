import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';

let database = null;

const loadModels = (sequelize) => {
  const dir = path.join(__dirname, '../src/models');
  const models = [];
  fs.readdirSync(dir).forEach(file => {
    const modelDir = path.join(dir, file),
    model = sequelize.import(modelDir);
    models[model.name] = model;
  });
  return models;
};

export default function (app) {
  if (!database) {
    const config = app.config;
    const sequelize = new Sequelize(config.DATABASE, config.USERNAME, config.PASSWORD, {
        host: config.HOST,
        dialect: 'postgres',
        operatorsAliases: false,
          port: 5432,

          dialectOptions: {
            ssl: true
          },
      
          pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
          }
      });

      database = {
        sequelize,
        Sequelize,
        models: {},
      };

      database.models = loadModels(sequelize);

      sequelize.sync().done(() => database);
    }
    return database;
  }
  