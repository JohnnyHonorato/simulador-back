'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mockup = sequelize.define('Mockup', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: {
      type: DataTypes.STRING
    },
  }, {});
  Mockup.associate = function(models) {
    // associations can be defined here
    Mockup.belongsToMany(models.Uniform, {
      foreignKey: 'id',
      constraints: false,
      through: 'mockup_uniforme'
    });
  };
  return Mockup;
};