'use strict';
module.exports = (sequelize, DataTypes) => {
  const Uniforme = sequelize.define('Uniforme', {
    description: DataTypes.STRING
  }, {});
  Uniforme.associate = function(models) {
    Uniforme.hasOne(models.Camisa, {
      foreignKey: 'id',
      constraints: false,
    });
    Uniforme.hasOne(models.Calcao, {
      foreignKey: 'id',
      constraints: false,
    });;
    Uniforme.hasOne(models.Meia, {
      foreignKey: 'id',
      constraints: false,
    });;
    Uniforme.hasOne(models.Mockup, {
      foreignKey: 'id',
      constraints: false,
    });
  };
  return Uniforme;
};