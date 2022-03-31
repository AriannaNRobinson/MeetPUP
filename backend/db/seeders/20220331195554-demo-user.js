'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
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
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
