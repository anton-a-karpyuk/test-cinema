'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('seats', [
            {seatNumber: '1-1', owner: 'Someone', createdAt: new Date(), updatedAt: new Date()},
            {seatNumber: '1-2', owner: null, createdAt: new Date(), updatedAt: new Date()},
            {seatNumber: '1-3', owner: null, createdAt: new Date(), updatedAt: new Date()},
            {seatNumber: '1-4', owner: null, createdAt: new Date(), updatedAt: new Date()},
            {seatNumber: '1-5', owner: null, createdAt: new Date(), updatedAt: new Date()}
          ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('seats', null, {});
  }
};
