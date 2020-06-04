'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('National_Daily_Trends', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dateReported: {
        type: Sequelize.DATEONLY
      },
      confirmed: {
        type: Sequelize.INTEGER,
      },
      active: {
        type: Sequelize.INTEGER,
      },
      recovered: {
        type: Sequelize.INTEGER,
      },
      deceased: {
        type: Sequelize.INTEGER,
      },
      tested: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('National_Daily_Trends');
  }
};