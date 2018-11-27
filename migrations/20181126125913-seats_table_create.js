'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('seats', {
          seatNumber: {
              type: Sequelize.STRING,
              primaryKey: true
          },
          owner: {
              type: Sequelize.STRING,
              allowNull: true
          },
          createdAt: {
              allowNull: false,
              type: Sequelize.DATE,
              defaultValue: Sequelize.NOW
          },
          updatedAt: {
              allowNull: false,
              type: Sequelize.DATE,
              defaultValue: Sequelize.NOW
          }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('seats');
  }
};
