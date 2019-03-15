'use strict';
module.exports = (sequelize, DataTypes) => {
  const Meia = sequelize.define('Meia', {
    description: DataTypes.STRING
  }, {});
  Meia.associate = function(models) {
    Meia.belongsToMany(models.Uniforme, {
      foreignKey: 'id',
      constraints: false,
      through: 'meia_uniforme'
    });
  };
  return Meia;
};