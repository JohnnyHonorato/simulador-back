'use strict';
module.exports = (sequelize, DataTypes) => {
  const Calcao = sequelize.define('Calcao', {
    description: DataTypes.STRING
  }, {});
  Calcao.associate = function(models) {
    // associations can be defined here
    Calcao.belongsToMany(models.Uniforme, {
      foreignKey: 'id',
      constraints: false,
      through: 'calcao_uniforme'
    });
  };
  return Calcao;
};