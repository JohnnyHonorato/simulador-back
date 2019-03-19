'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    login: DataTypes.STRING,
    password: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    role: DataTypes.STRING
  }, 
  {});
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};