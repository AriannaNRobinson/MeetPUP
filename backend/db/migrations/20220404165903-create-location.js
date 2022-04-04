'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      zipCode: {
        allowNull: false,
        type: Sequelize.INTEGER(5)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Locations');
  }
};
