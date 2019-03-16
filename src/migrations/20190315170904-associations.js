'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Uniforms', // name of Source model
      'shirt_id', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Shirts', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      })
      .then(() => {
        return queryInterface.addColumn(
          'Uniforms', // name of Target model
          'Sock_id', // name of the key we're adding
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Socks', // name of Source model
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          }
        );
      })
      .then(() => {
        return queryInterface.addColumn(
          'Uniforms', // name of Target model
          'mockup_id', // name of the key we're adding
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Mockups', // name of Source model
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          }
        );
      })
      .then(() => {
        return queryInterface.addColumn(
          'Uniforms', // name of Target model
          'short_id', // name of the key we're adding
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Shorts', // name of Source model
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          }
        );
      });
  },

down: (queryInterface, Sequelize) => {
  return queryInterface.removeColumn(
    'Uniforms', // name of Target model
    'short_id' // key we want to remove
  )
  .then(() => {
    // remove Payment hasOne Order
    return queryInterface.removeColumn(
      'Uniforms', // name of the Target model
      'short_id' // key we want to remove
    );
  })
  .then(() => {
    // remove Payment hasOne Order
    return queryInterface.removeColumn(
      'Uniforms', // name of the Target model
      'sock_id' // key we want to remove
    );
  })
  .then(() => {
    // remove Payment hasOne Order
    return queryInterface.removeColumn(
      'Uniforms', // name of the Target model
      'mockup_id' // key we want to remove
    );
  })
}
};
