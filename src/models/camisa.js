'use strict';
module.exports = (sequelize, DataTypes) => {
  const Camisa = sequelize.define('Camisa', {
    description: DataTypes.STRING
  }, {});
  Camisa.associate = function(models) {
    Camisa.belongsToMany(models.Uniforme, {
      foreignKey: 'id',
      constraints: false,
      through: 'camisa_uniforme'
    });
  };
  return Camisa;
};