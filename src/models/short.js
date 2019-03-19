'use strict';

module.exports = (sequelize, DataTypes) => {
  const Short = sequelize.define('Short', {
    description: DataTypes.STRING,
    sport: {
      type: DataTypes.STRING
    },
    color: {
      type: DataTypes.STRING
    },
    svg: {
      type: DataTypes.STRING
    }
  }, {});
  Short.associate = function(models) {
    // associations can be defined here
    Short.belongsToMany(models.Uniform, {
      foreignKey: 'id',
      constraints: false,
      through: 'Short_uniforme'
    });
  };
  return Short;
};