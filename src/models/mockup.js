const Sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes){ 
  return Mockup = sequelize.define('mockup', {
    nome: {
      type: Sequelize.STRING
    }
  });
};