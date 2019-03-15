'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mockup = sequelize.define('Mockup', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Mockup.associate = function(models) {
    // associations can be defined here
  };
  return Mockup;
};