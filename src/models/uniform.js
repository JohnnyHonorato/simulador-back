'use strict';

module.exports = (sequelize, DataTypes) => {

  const Uniform = sequelize.define('Uniform', {
    description: DataTypes.STRING
  }, {});

  Uniform.associate = function (models) {
    Uniform
      .hasOne(models.Shirt, {
        foreignKey: 'id',
        constraints: false,
      });
    Uniform
      .hasOne(models.Short, {
        foreignKey: 'id',
        constraints: false,
      });;
    Uniform
      .hasOne(models.Sock, {
        foreignKey: 'id',
        constraints: false,
      });;
    Uniform
      .hasOne(models.Mockup, {
        foreignKey: 'id',
        constraints: false,
      });
  };
  return Uniform;
};