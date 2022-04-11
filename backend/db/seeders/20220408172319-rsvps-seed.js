'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('RSVPs', [
     { eventId: 2, userId: 3},
     { eventId: 3, userId: 1},
     { eventId: 2, userId: 2}
   ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('RSVPs', null, {});
  }
};
