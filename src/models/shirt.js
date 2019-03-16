'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const Shirt = sequelize.define('Shirt', {
    description: DataTypes.STRING
  }, {});
  
  Shirt.associate = function (models) {
    Shirt.belongsToMany(models.Uniforme, {
      foreignKey: 'id',
      constraints: false,
      through: 'Shirt_uniforme'
    });
  };

  return Shirt;
};