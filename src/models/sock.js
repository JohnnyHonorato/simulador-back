'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sock = sequelize.define('Sock', {
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
  Sock.associate = function(models) {
    Sock.belongsToMany(models.Uniform, {
      foreignKey: 'id',
      constraints: false,
      through: 'Sock_uniforme'
    });
  };
  return Sock;
};