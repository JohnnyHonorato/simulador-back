'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Uniformes', // name of Source model
      'camisa_id', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Camisas', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      })
      .then(() => {
        return queryInterface.addColumn(
          'Uniformes', // name of Target model
          'meia_id', // name of the key we're adding
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Meia', // name of Source model
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          }
        );
      })
      .then(() => {
        return queryInterface.addColumn(
          'Uniformes', // name of Target model
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
          'Uniformes', // name of Target model
          'calcao_id', // name of the key we're adding
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Calcaos', // name of Source model
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
    'Uniformes', // name of Target model
    'calcao_id' // key we want to remove
  )
  .then(() => {
    // remove Payment hasOne Order
    return queryInterface.removeColumn(
      'Uniformes', // name of the Target model
      'calcao_id' // key we want to remove
    );
  })
  .then(() => {
    // remove Payment hasOne Order
    return queryInterface.removeColumn(
      'Uniformes', // name of the Target model
      'meia_id' // key we want to remove
    );
  })
  .then(() => {
    // remove Payment hasOne Order
    return queryInterface.removeColumn(
      'Uniformes', // name of the Target model
      'mockup_id' // key we want to remove
    );
  })
}
};
