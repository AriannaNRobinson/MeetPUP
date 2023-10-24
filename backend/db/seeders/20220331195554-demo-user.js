'use strict';
const bcrypt = require('bcryptjs');

// NEW: add this code to each create table migration file
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
// END of new code


module.exports = {
  up: (queryInterface, Sequelize) => {
    // new
    options.tableName = 'Users';
    // end

    // the below used to say "Users" instead of options
    return queryInterface.bulkInsert(options, [
      {
        email: 'demo@example.com',
        username: 'DemoUser',
        hashedPassword: bcrypt.hashSync('Password1!')
      },
      {
        email: 'johndoe@example.com',
        username: 'JohnDoe',
        hashedPassword: bcrypt.hashSync('Password2@')
      },
      {
        email: 'janedoe@example.com',
        username: 'JaneDoe',
        hashedPassword: bcrypt.hashSync('Password3#')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
        // new
        options.tableName = 'Users';
        // end
    
        // the below used to say "Users" instead of options
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['DemoUser', 'JohnDoe', 'JaneDoe'] }
    }, {});
  }
};
