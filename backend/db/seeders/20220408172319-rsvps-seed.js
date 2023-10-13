'use strict';

// // NEW: add this code to each create table migration file
// let options = {};
// if (process.env.NODE_ENV === 'production') {
//   options.schema = process.env.SCHEMA;  // define your schema in options object
// }
// // END of new code


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
