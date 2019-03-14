const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
    const Mockup = sequelize.define('Mockup', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    });
    return Mockup;
};


