const Sequelize = require('sequelize');
let conf = require('../default');
const Mockup = require('../src/models/mockup');
const fs = require('fs');
const path = require('path');

const loadModels = (sequelize) => {
  const dir = path.join(__dirname, '../src/models')
  let models = [];
  fs.readdirSync(dir).forEach(file => {
    const modelDir = path.join(dir, file),
    model = sequelize.import(modelDir);
    models[model.name] = model;
  });
  return models
};

let database = null;

module.exports = function(app) {
  if(!database) {
    const config = app.config,
    sequelize = new Sequelize(conf.database.DATABASE, conf.database.USERNAME, conf.database.PASSWORD, {
      host: conf.database.HOST,
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
      models: {}
    };

    database.models = loadModels(sequelize);
    sequelize.sync().done(() => {
      return database;
    });
  }
  return database;
}

// const sequelize = new Sequelize(config.database.DATABASE, config.database.USERNAME, config.database.PASSWORD, {
//   host: config.database.HOST,
//   dialect: 'postgres',
//   operatorsAliases: false,
//     port: 5432,

//     dialectOptions: {
//       ssl: true
//     },

//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
// });

// var models = [                 
//   Mockup,            
// ];

// models.forEach(function(model) {
//   module.exports[model] = sequelize.import(__dirname, model);
// });

// sequelize.sync();

// module.exports = sequelize;