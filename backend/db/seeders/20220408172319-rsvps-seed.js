'use strict';

// NEW: add this code to each create table migration file
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
// END of new code


module.exports = {
  up: (queryInterface, Sequelize) => {
        // new
        options.tableName = 'RSVPs';
        // end
    
        // the below used to say "RSVPs" instead of options
   return queryInterface.bulkInsert(options, [
     { eventId: 2, userId: 3},
     { eventId: 3, userId: 1},
     { eventId: 2, userId: 2}
   ], {});
  },

  down: (queryInterface, Sequelize) => {
        // new
        options.tableName = 'RSVPs';
        // end
    
        // the below used to say "RSVPs" instead of options
   return queryInterface.bulkDelete(options, null, {});
  }
};
