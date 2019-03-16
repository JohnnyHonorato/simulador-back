'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sock = sequelize.define('Sock', {
    description: DataTypes.STRING
  }, {});
  Sock.associate = function(models) {
    Sock.belongsToMany(models.Uniforme, {
      foreignKey: 'id',
      constraints: false,
      through: 'Sock_uniforme'
    });
  };
  return Sock;
};